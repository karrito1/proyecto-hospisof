// capa modelo para el modulo de medicamento

import { conx } from "./baseDatos.js";

const db = conx.promise();

export const medicamentoModel = {
  findAll: async () => {
    const sql = "SELECT * FROM medicamento ORDER BY nombre";
    const [rows] = await db.query(sql);
    return rows;
  },

  findById: async (id) => {
    const sql = "SELECT * FROM medicamento WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    const sql = "INSERT INTO medicamento SET ?";
    const [result] = await db.query(sql, [data]);
    return result;
  },

  delete: async (id) => {
    const estadoP = "inactivo";
    const sql = "UPDATE medicamento SET estado =? WHERE id = ?";
    const [result] = await db.query(sql, [estadoP, id]);
    return result;
  },
  
  update: async (id, data) => {
    const sql = "UPDATE medicamento SET ? WHERE id = ?";
    const [result] = await db.query(sql, [data, id]);
    return result;
  },
};
