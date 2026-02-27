// capa modelo para el modulo de citas

import { conx } from "./baseDatos.js";

const db = conx.promise();

export const citaModel = {
  findAll: async () => {
    const sql = "SELECT * FROM cita ORDER BY fecha";
    const [rows] = await db.query(sql);
    return rows;
  },

  findById: async (id) => {
    const sql = "SELECT * FROM cita WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    const sql = "INSERT INTO cita SET ?";
    const [result] = await db.query(sql, [data]);
    return result;
  },

 delete: async (id) => {
  const sql = "UPDATE cita SET estado ='cancelda' WHERE id = ?";
  const [result] = await db.query(sql, [ id]);
  return result;
},

  update: async (id, data) => {
    const sql = "UPDATE cita SET ? WHERE id = ?";
    const [result] = await db.query(sql, [data, id]);
    return result;
  }

};
