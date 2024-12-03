import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { DefaultSession } from 'next-auth'

type ExtendedUser = DefaultSession['user'] & {
    id: string;
}

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || '',
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "邮箱", type: "email" },
                password: { label: "密码", type: "password" }
            },
            async authorize(credentials) {
                // 这里实现自定义的用户验证逻辑
                if (credentials?.email === "test@example.com" && credentials?.password === "test") {
                    return {
                        id: "1",
                        name: "测试用户",
                        email: "test@example.com",
                    }
                }
                return null
            }
        }),
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as ExtendedUser).id = token.id as string
            }
            return session
        },
    },
})

export { handler as GET, handler as POST } 