import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { db } from "@/lib/db";



export const { auth, handlers, signIn,signOut } = NextAuth({
  providers: [Credentials({
    credentials: {
      email: {},
      password: {}
    },

    authorize: async (credentials) => {
      const user = await db.user.findFirst({
        where: { email: credentials.email.toLowerCase(), password:credentials.password},
      });
      if (!user){
        throw new Error(" Invalid credentials");
      }
      return user;
    }
  })]
});