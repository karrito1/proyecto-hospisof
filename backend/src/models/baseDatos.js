// modulo base de datos
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno

let conx;

try {
  conx = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: process.env.DB_CONNECTION_LIMIT || 10,
    queueLimit: 0,
  });
  console.log("Conexión a la base de datos establecida correctamente");
} catch (error) {
  console.error(`Error inesperado: ${error.message}`);
}

export { conx };
