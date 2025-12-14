import jwt from "jsonwebtoken";
import { isSubscriptionActive } from "../services/subscription.service.js";

export const guardian = async (req, res, next) => {
    const token = req.cookies?.auth_token;

    if(!token) {
        res.setHeader("Location", "/acceso-restringido.html");
        return res.status(302).send("Redirigiendo...");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const subscriptionIsActive = await isSubscriptionActive(decoded.id);

        if (!subscriptionIsActive) {
            res.setHeader("Location", "/acceso-restringido.html")
            return res.status(302). send("Suscripción inactiva");
        }

        req.user = decoded;
        next();
    } catch {
        res.setHeader("Location", "/acceso-restringido.html");
        return res.status(302).send("Token inválido");
    }
};