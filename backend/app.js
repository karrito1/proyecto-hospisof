import express from "express";
import cors from "cors";
import pacientesCTR from "./src/routes/paciente/paciente.route.js";
import citasCTR from "./src/routes/citas/cita.route.js";
import CampaignCTR from "./src/routes/Campaign/Campaign.route.js";
import MedicamentoCTR from "./src/routes/medicmanentos/route.medicamento.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("API Encendida");
});

// Rutas correctamente montadas
app.use("/", pacientesCTR);
app.use("/", citasCTR);
app.use("/", CampaignCTR);
app.use("/", MedicamentoCTR);

export default app;
