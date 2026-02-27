// src/models/baseDatos.js
import mysql from "mysql2";

let conx;
try {
  conx = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "proyecto_hospisoft",
    port: "3306",
    connectionLimit: 10,
    queueLimit: 0,
  });
} catch (error) {
  console.log(`Ha ocurrido un error en la conexión: ${error.message}`);
}
export { conx };
