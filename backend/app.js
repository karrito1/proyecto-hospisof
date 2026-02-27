import express from "express";
import cors from "cors";
import usuarioCTR from "./src/routes/usuario.route.js";
import pacientesCTR from "./src/routes/paciente.route.js";
import citasCTR from "./src/routes/cita.route.js";
import MedicamentoCTR from "./src/routes/medicamento.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("API Encendida");
});

app.use("/", usuarioCTR);
app.use("/", pacientesCTR);
app.use("/", citasCTR);
app.use("/", MedicamentoCTR);

export default app;
