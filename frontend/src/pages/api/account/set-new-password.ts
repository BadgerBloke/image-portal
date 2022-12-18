import type { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "../../../config";

const SetNewPassword = async (req: NextApiRequest, res: NextApiResponse) => {
    const { uid, token, new_password, re_new_password } = req.body;
    const body = JSON.stringify({
        uid,
        token,
        new_password,
        re_new_password,
    });

    try {
        const apiRes = await fetch(
            `${API_URL}/reg-auth/users/reset_password_confirm/`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body,
            }
        );

        if (apiRes.status === 204) {
            return res.status(200).json({
                success: "Password reset success",
            });
        } else {
            return res.status(apiRes.status).json({
                error: "Password reset failed",
            });
        }
    } catch (err) {
        return res.status(500).json({
            error: "Password reset failed",
        });
    }
};

export default SetNewPassword;
