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
            name: 'Credentials',
            credentials: {},
            async authorize(credentials, req){
                const user = credentials as LoginRequest;

                return await fetch("http://localhost:8080/api/v1/auth/login", {
                    method: 'POST',
                    body: JSON.stringify({
                        email: user.email,
                        password: user.password
                    }),
                    headers: {"Content-Type": "application/json"}
                })
                    .then((res) => res.json())
                    .catch((e) => null);
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // oturum açma işlemine izin verilip verilmeyeceği
            return true
        },
        async redirect({ url, baseUrl }) {
            // neden hata aldığına dair sayfalara yönlendir
            return baseUrl
        },
        async jwt(props) {
            const newUser = props.user as any;
            // giriş yapıldığında burada değerleri kontrol et
            if (newUser) {
                props.token = {
                    ...props.token,
                    ...props.user
                }
            }
            return props.token;
        },
        async session({ session, user, token }) {
            // session içerisinde jwtde belirttiğimiz ksıımları kullanmak için ekle // burayı user içerisine verebiliriz?
            return {
                ...session,
                user: {
                    ...session.user,
                    ...token
                }
            }
        },
    },
    pages: {
        signIn: '/login'
    },
    // pages: {
    //     signIn: '/auth/signin',
    //     signOut: '/auth/signout',
    //     error: '/auth/error', // Error code passed in query string as ?error=
    //     verifyRequest: '/auth/verify-request', // (used for check email message)
    //     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    // }
}
