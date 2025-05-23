const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd1234!",
  database: "pc_online_store",
});

app.get("/products", async (req, res) => {
  try {
    const [rows] = await db.promise().query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    console.error("Query failed:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

app.listen(3001, () => {
  console.log("Backend server is running!");
});
