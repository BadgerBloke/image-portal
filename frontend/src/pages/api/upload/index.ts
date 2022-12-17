import { NextApiRequest, NextApiResponse } from "next";
// import { unstable_getServerSession } from "next-auth";
import { getSession } from "next-auth/client";
// import { authOptions } from "../auth/[...nextauth]";

const upload = async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method;
    // const session = await unstable_getServerSession(req, res, authOptions);
    const session = await getSession({ req });
    console.log("session data", session);
    if (session && session.user) {
        switch (method) {
            case "POST":
                try {
                    // parse multipart formData
                    const { imageTitle, imageDescription, image } = req.body;
                    console.log("imageTitle", );
                    if (imageTitle && imageDescription && image) {
                        // upload to localhost:8000/api/upload
                        const response = await fetch(
                            "http://localhost:8000/image/add/",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                    Authorization: `JWT ${session.accessToken}`,
                                },
                                body: req.body,
                            }
                        );
                        const data = await response.json();
                        console.log("data 🙋‍♂️🙋‍♂️🙋‍♂️", data);
                        return res.status(200).json(data);
                    } else {
                        res.status(400).json({
                            message: "Bad request",
                        });
                    }
                } catch (error: any) {}
                break;
            default:
                res.status(405).json({
                    message: `Method: ${method} not allowed!`,
                });
                break;
        }
    } else {
        res.status(401).json({
            message: "Unauthorized",
        });
    }
};

export default upload;
