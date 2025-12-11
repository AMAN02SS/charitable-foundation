import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose"
import User from "@/models/User"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"




export const authOptions = {
  providers: [
    GithubProvider({  
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        // connect to Database
        await connectDb()
        const currentUser = await User.findOne({ email: user.email })
        if (!currentUser) {
          const newUser = await User.create({
            email: user.email,
            username: user.email.split('@')[0],
          })
          user.name = newUser.username
        }
        else{
          user.name = currentUser.username
        }
        return true;
      }
    },

    async session({ session }) {
      const dbUser = await User.findOne({ email: session.user.email })
      session.user.name = dbUser.username
      return session
    },
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
