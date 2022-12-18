// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { API_URL } from "../../../config";


const Login = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const { username, password, csrfToken } = req.body;
        console.log("login data", username, password, csrfToken, API_URL);
        try {
            const apiRes = await fetch(`${API_URL}/auth/login/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken,
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await apiRes.json();
            if (apiRes.status === 200) {
                return res.status(200).json({
                    data,
                });
            } else {
                return res.status(apiRes.status).json({
                    error: "Authentication Failed!",
                });
            }
        } catch (err) {
            return res.status(500).json({
                error: "Something went wrong when authenticating!",
            });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed!` });
    }
};

export default Login;
