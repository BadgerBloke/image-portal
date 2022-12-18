const API_URL_LOCAL = process.env.NEXT_PUBLIC_LOCAL_API_URL;
const API_URL_PRODUCTION = process.env.NEXT_PUBLIC_API_URL;

export const NEXTAUTH_URL = process.env.NEXTAUTH_URL;
export const JWT_SIGNING_PRIVATE_KEY = process.env.JWT_SIGNING_PRIVATE_KEY;

export const API_URL =
    process.env.NODE_ENV === "production" ? API_URL_PRODUCTION : API_URL_LOCAL;
