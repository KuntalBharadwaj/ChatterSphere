const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  const obj = {
    name: "kkkk",
    messaga: "dufdjfnd",
  };
  res.send(obj);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) console.log(err.message);
  else console.log(`Server Started at ${PORT}`);
});
