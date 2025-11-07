import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { db } from "@/lib/db";
import bcrypt from 'bcrypt'

// NextAuth is used to securely authenticate users and ensure that they only have access to their own tasks. A user who is not logged in will be automatically redirected to the signin page if they try to access the homepage or report page.

export const { auth, handlers, signIn,signOut } = NextAuth({
  providers: [Credentials({
    credentials: {
      email: {},
      password: {}
    },

    authorize: async (credentials) => {
      const user = await db.user.findFirst({
        where: { email: credentials.email.toLowerCase()},
      });
      let isMatch = false;
      if (user) {
        isMatch = await bcrypt.compare(credentials.password, user.password)
      }
      if (!isMatch){
        return null;
      }
      return user;
    },
  })]
});