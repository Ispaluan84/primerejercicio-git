import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.cookies?.auth_token;

    if (!token)
        return res.status(401).json({ error: "No autenticado" });


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    next();
    } catch {
        return res.status(401).json({ error: "Token invalido" });
    }
};