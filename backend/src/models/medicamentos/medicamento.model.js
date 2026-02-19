// capa modelo para el modulo de medicamento

import { conx } from "../baseDatos.js";

const db = conx.promise();

export const medicamentoModel = {

  // Listar todos los medicamentos
  findAll: async () => {
    const sql = "SELECT * FROM medicamento ORDER BY nombre";
    const [rows] = await db.query(sql);
    return rows;
  },

  // Buscar medicamento por ID
  findById: async (id) => {
    const sql = "SELECT * FROM medicamento WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  // Crear medicamento
  create: async (data) => {
    const sql = "INSERT INTO medicamento SET ?";
    const [result] = await db.query(sql, [data]);
    return result;
  },

  // Eliminar medicamento
  delete: async (id) => {
    const sql = "DELETE FROM medicamento WHERE id = ?";
    const [result] = await db.query(sql, [id]);
    return result;
  },

  // Actualizar medicamento
  update: async (id, data) => {
    const sql = "UPDATE medicamento SET ? WHERE id = ?";
    const [result] = await db.query(sql, [data, id]);
    return result;
  }

};
