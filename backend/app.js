// app.js
import express from "express";
import cors from "cors";
import usuarioRutas from "./src/routes/usuario.route.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", usuarioRutas);
export default app;
