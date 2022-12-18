import type { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "../../../config";

const ResetPassword = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email } = req.body;
    const body = JSON.stringify({ email });

    try {
        const apiRes = await fetch(`${API_URL}/reg-auth/users/reset_password/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body,
        });

        if (apiRes.status === 204) {
            return res.status(200).json({
                success: "Sending password reset link success",
            });
        } else {
            return res.status(apiRes.status).json({
                error: "Sending password reset link failed",
            });
        }
    } catch (err) {
        return res.status(500).json({
            error: "Sending password reset link failed",
        });
    }
};

export default ResetPassword;
