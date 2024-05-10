const express = require("express");
//const pool = require("./db");
const PORT = 3000;

const app = express();
app.use(express.json());

//routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello" });
});

//Escuchar en un puerto especifico

app.listen(3000, () => {
  console.log(`Backend server is running on http://localhost: ${PORT}`);
});



