import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import type { NextApiRequest, NextApiResponse } from "next";
import {
    API_URL,
    NEXTAUTH_URL,
    // JWT_SIGNING_PRIVATE_KEY,
} from "../../../config";

const settings = {
    providers: [
        Providers.Credentials({
            name: "credentials",
            async authorize(credentials) {
                const { username, password, csrfToken } = credentials;
                const res = await fetch(`${NEXTAUTH_URL}/api/account/login`, {
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
                const resData = await res.json();
                const data = resData.data;
                const {
                    code,
                    email,
                    first_name,
                    last_name,
                    last_login,
                    is_staff,
                    image,
                } = data.user;

                const user = {
                    id: code,
                    email,
                    username: data.user.username || email,
                    name: `${first_name} ${last_name}`,
                    image,
                    is_staff,
                    last_login,
                    first_name,
                    last_name,
                    accessToken: data.access_token,
                    refreshToken: data.refresh_token,
                };

                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    // jwt: {
    //     // signingKey: {
    //     //     kty: "EC",
    //     //     kid: "DlpipFd3bK1CXYrq6cUKyCHAtdsaKd_MGO2C-rA9ZiU",
    //     //     alg: "HS512",
    //     //     x: "VXVcaKOnxwsqOnFxqJPecN_Bkr44yh5ZZ4eP3-DibPU",
    //     //     y: "sYN99TH_uuWLftGMeHaIGQpa9-OAU-Pdn-XooTf6BN0",
    //     //     d: "0WBqq57SxsDGQIzrKrTIguODzSvCGr4f8S-0moEOLXI",
    //     // },
    //     verificationOptions: {
    //         maxTokenAge: `${3 * 24 * 60 * 60}s`, // e.g. `${30 * 24 * 60 * 60}s` = 30 days
    //     },
    // },
    callbacks: {
        async signIn(user: any, account: any, profile: any) {
            if (account.id === "credentials") {
                if (user.accessToken) return true;
                return false;
            }
            return false;
        },
        async jwt(
            token: any,
            user: any,
            account: any,
            profile: any,
            isNewUser: boolean
        ) {
            if (user) {
                const { accessToken } = user;
                token.accessToken = accessToken;
            }
            return token;
        },
        async session(session: any, user: any) {
            session.accessToken = user.accessToken;
            return session;
        },
    },
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    },
};

const Authentication = (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, settings);

export default Authentication;
