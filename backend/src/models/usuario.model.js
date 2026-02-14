// src/models/usuario.model.js
import { conexion } from "./baseDatos.js";
const db = conexion.promise();

export const usuarioModel = {
  create: async (data) => {
    const sql = "INSERT INTO usuario SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },
  update: async (id, data) => {
    const sql = "UPDATE usuario SET ? WHERE id = ?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
  delete: async (id) => {
    const sql = "DELETE FROM usuario WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  findAll: async () => {
    const sql = "SELECT * FROM usuario";
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM usuario WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
};
