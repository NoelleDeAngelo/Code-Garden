import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { db } from "@/lib/db";
import bcrypt from 'bcrypt'



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