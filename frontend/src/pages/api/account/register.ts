import type { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "../../../config";

const Register = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const { first_name, last_name, email, password, re_password } =
            req.body;

        try {
            const apiRes = await fetch(`${API_URL}/reg-auth/users/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    password,
                    re_password,
                }),
            });

            const data = await apiRes.json();

            if (apiRes.status === 201) {
                return res.status(200).json({
                    success: data.success,
                });
            } else if (apiRes.status === 400) {
                return res.status(apiRes.status).json({
                    error: data.password,
                });
            } else {
                return res.status(apiRes.status).json({
                    error: data,
                });
            }
        } catch (err) {
            return res.status(500).json({
                error: "Something went wrong when registering for an account!",
            });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
};

export default Register;
