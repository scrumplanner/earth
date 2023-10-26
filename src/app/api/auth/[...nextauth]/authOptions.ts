import {NextAuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {JWT} from "next-auth/jwt";
import {Awaitable} from "next-auth/src/core/types";
interface LoginRequest{
    email: string,
    password: string
}
interface LoginResponse {
    id: number,
    email: string,
    token: string
}
export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        Credentials({
            credentials: {},
            async authorize(credentials, req){
                const user = credentials as LoginRequest;

                return await fetch("http://localhost:8080/api/v1/auth/login", {
                    method: 'post',
                    body: JSON.stringify({
                        email: user.email,
                        password: user.password
                    })
                }).then((res) => res.json())
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async session({ session, user, token }) {
            return session
        },
        async jwt({token, user}: Awaitable<JWT>) {
            const newUser = user as any;
            if (newUser) {
                console.log('token!!', token);
                console.log('user!!', user);
                token = {accessToken: newUser.token};
            }
            return token;
        }
    },
    pages: {
        signIn: '/login'
    }
}
