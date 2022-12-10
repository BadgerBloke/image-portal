import { NEXTAUTH_URL } from "@config/index";
import { NextApiRequest, NextApiResponse } from "next";

const register = async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method;
    switch (method) {
        case "POST":
            const { first_name, last_name, email, password, re_password } = req.body;
            try {
                const response = await fetch(
                    `${NEXTAUTH_URL}/reg-auth/users/`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            first_name,
                            last_name,
                            email,
                            password,
                            re_password
                        }),
                    }
                );
                const data = await response.json();
                if (response.status === 201) {
                    return res.status(200).json(data);
                } else {
                    return res.status(400).json(data);
                }
            } catch (error) {
                res.status(500).json({ message: "Something went wrong" });
            }
            break;
        default:
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
};

export default register;
