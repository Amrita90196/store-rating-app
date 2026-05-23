const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const stores = [
  { name: "Pizza Palace", desc: "Best pizza 🍕", rating: 4.5 },
  { name: "Burger Hub", desc: "Juicy burgers 🍔", rating: 4.2 },
  { name: "Cafe Coffee", desc: "Chill vibes ☕", rating: 4.7 }
];

app.get("/stores", (req, res) => {
  res.json(stores);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});