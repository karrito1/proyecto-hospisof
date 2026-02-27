// capa modelo para el modulo de citas

import { conx } from "./baseDatos.js";
const db = conx.promise();
export const rolModel = {
  findAll: async () => {
    const sql = "SELECT * FROM rol ORDER BY id";
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM rol WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
};
