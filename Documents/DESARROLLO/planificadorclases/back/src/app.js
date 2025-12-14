import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import { guardian } from "./middleware/guardian.middleware.js";
import { authMiddleware } from "./middleware/auth.middleware.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes)

app.get(/^\/planificador-.*\.html$/, guardian, (req, res) => {
  res.status(200).send("Acceso concedido. Cargando planificador...");
});


app.get("/acceso-restringido.html", (req, res) => {
    res.status(403).send("Acceso restringido (paywall).");
});

//Quitar este get en producción
app.get("/me", authMiddleware, (req, res) => {
    res.json(req.user);
});

export default app;