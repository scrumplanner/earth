import {NextAuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface LoginRequest{
    email: string,
    password: string
}
export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        Credentials({
            credentials: {},
            async authorize(credentials, req){
                const { email, password} = credentials as LoginRequest;

                if(email !== 's@s.com' || password !== '123'){
                    return null;
                }

                return { id: '1', name: 'Serhat', email: 'serhat' }
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
}
