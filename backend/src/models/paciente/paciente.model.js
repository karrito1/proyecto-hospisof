// capa modelo para el modulo de paciente

import { conx } from "../baseDatos.js";

const db = conx.promise();

export const pacienteModel = {

  // Listar todos los pacientes
  findAll: async () => {
    const sql = "SELECT * FROM paciente ORDER BY telefono";
    const [rows] = await db.query(sql);
    return rows;
  },

  // Buscar paciente por ID
  finById: async (id) => {
    const sql = "SELECT * FROM paciente WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  // Crear paciente
  create: async (data) => {
    const sql = "INSERT INTO paciente SET ?";
    const [result] = await db.query(sql, [data]);
    return result;
  },

  // Eliminar paciente
  delete: async (id) => {
    const sql = "DELETE FROM paciente WHERE id = ?";
    const [result] = await db.query(sql, [id]);
    return result;
  },

  // Actualizar paciente
  update: async (id, data) => {
    const sql = "UPDATE paciente SET ? WHERE id = ?";
    const [result] = await db.query(sql, [data, id]);
    return result;
  }

};
