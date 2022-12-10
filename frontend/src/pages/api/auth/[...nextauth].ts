import NextAuth, { NextAuthOptions } from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next";
import { NEXTAUTH_URL } from "@config/index";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { username, password, csrfToken } = credentials as {
                    username: string;
                    password: string;
                    csrfToken: string;
                };

                const res = await fetch(`${NEXTAUTH_URL}/auth/login/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        password,
                        csrfToken,
                    }),
                });
                const data = await res.json();
                const { id, email, first_name, last_name } = data?.user;

                const user = {
                    id,
                    email,
                    username: email,
                    name: `${first_name} ${last_name}`,
                    firstName: first_name,
                    lastName: last_name,
                    accessToken: data?.access_token,
                    refreshToken: data?.refresh_token,
                };

                console.log("User Object", user);
                if (user && user.accessToken) {
                    console.log("User available", user.accessToken);
                    return user;
                } else {
                    console.log("User not available", user);
                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
        // error: "/auth/error",
    },
};

// const settings = {
//     providers: [
//         Providers.Credentials({
//             name: "credentials",
//             async authorize(credentials) {
//                 const { username, password, csrfToken } = credentials;
//                 const res = await fetch(`${NEXTAUTH_URL}/auth/login/`, {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         username,
//                         password,
//                         csrfToken,
//                     }),
//                 });
//                 const resData = await res.json();
//                 const data = resData.data;
//                 const { id, email, first_name, last_name } = data?.user;

//                 const user = {
//                     id,
//                     email,
//                     username: email,
//                     name: `${first_name} ${last_name}`,
//                     firstName: first_name,
//                     lastName: last_name,
//                     accessToken: data?.access_token,
//                     refreshToken: data?.refresh_token,
//                 };

//                 console.log("User Object", user);
//                 if (user) {
//                     return user;
//                 } else {
//                     return null;
//                 }
//             },
//         }),
//     ],
// callbacks: {
//     async signIn(user: any, account: any, profile: any) {
//         if (account.id === "credentials") {
//             if (user.accessToken) return true;
//             return false;
//         }
//         return false;
//     },
//     async jwt(
//         token: any,
//         user: any,
//         account: any,
//         profile: any,
//         isNewUser: boolean
//     ) {
//         if (user) {
//             const { accessToken } = user;
//             token.accessToken = accessToken;
//         }
//         return token;
//     },
//     async session(session: any, user: any) {
//         session.accessToken = user.accessToken;
//         return session;
//     },
// },
//     pages: {
//         signIn: "/auth/login",
//     },
// };

// const Authentication = (req: NextApiRequest, res: NextApiResponse) =>
//     NextAuth(req, res, settings);

// export default Authentication

export default NextAuth(authOptions);
