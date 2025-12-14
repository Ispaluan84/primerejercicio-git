import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import supabase from "../config/supabase.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password)
        return res.status(400).json({ error: "Datos incompletos" });
    const hash = await bcrypt.hash(password, 10);

    const { error } = await supabase.from("users").insert({
        id: uuid(),
        email,
        password: hash,
    });

    if (error) return res.status(400).json(error);

    res.json({ ok: true });
}


export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({ error: "Datos incompletos" });

    const { data: user, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

    if (error || !user)
        return res.status(401).json({ error: "Credenciales invalidas" });

    const ok = await bcrypt.compare(password,user.password);

    if(!ok)
        return res.status(401).json({ error: "Credenciales invalidas" });

    const token = jwt.sign(
        {id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    res
        .cookie("auth_token", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: false //en producción será true
        })
        .json({ ok: true });
};

