// capa modelo para el modulo de paciente

import { conx } from "./baseDatos.js";

const db = conx.promise();

export const pacienteModel = {
  findAll: async () => {
    const sql = "SELECT * FROM paciente ORDER BY telefono";
    const [rows] = await db.query(sql);
    return rows;
  },

  findById: async (id) => {
    const sql = "SELECT * FROM paciente WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    const sql = "INSERT INTO paciente SET ?";
    const [result] = await db.query(sql, [data]);
    return result;
  },

  delete: async (id) => {
    const estadoP = "inactivo";
    const sql = "UPDATE paciente SET estado=? WHERE id = ?";
    const [result] = await db.query(sql, [estadoP, id]);
    return result;
  },

  update: async (id, data) => {
    const sql = "UPDATE paciente SET ? WHERE id = ?";
    const [result] = await db.query(sql, [data, id]);
    return result;
  },
};
