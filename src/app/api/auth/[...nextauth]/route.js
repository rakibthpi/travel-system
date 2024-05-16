import {PrismaAdapter} from "@next-auth/prisma-adapter"
import NextAuth from "next-auth"
import CreadentialsProvider from "next-auth/providers/credentials"
import bcryptjs from "bcryptjs"
import db from "@/lib/db"

export const authOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        CreadentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: "email", type: "email"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials) {
                const {email, password} = credentials
                const user = await db.user.findUnique({
                    where: {
                        email
                    }
                })
                if(!user) {
                    throw new Error("No user found")
                }
                const isCorrectPassword = await bcryptjs.compare(password, user.password)
                if(!isCorrectPassword) {
                    throw new Error("Wrong password")
                }
                else{
                    const {password, ...currentUser} = user
                    return currentUser
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"

    },
    callbacks: {
        async jwt({token, user}) {
            if(user) {
                token.isAdmin = user.isAdmin
                return token
            }
        },
        async session({session, token}) {
            session.user.isAdmin = token.isAdmin
            return session
        }
    }

}


const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}