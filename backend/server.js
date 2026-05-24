const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const bcrypt = require("bcrypt");

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, hashedPassword, role]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/stores", async (req, res) => {
  try {
    const { name, address, rating } = req.body;

    const newStore = await pool.query(
      "INSERT INTO stores (name, address, rating) VALUES ($1, $2, $3) RETURNING *",
      [name, address, rating]
    );

    res.json(newStore.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/stores", async (req, res) => {
  try {
    const allStores = await pool.query(
      "SELECT * FROM stores ORDER BY id ASC"
    );

    res.json(allStores.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});