const express = require("express");
const UserModel = require("../src/models/user.models");

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Hello, world</h1>");
});

app.get("/users", (req, res) => {
  try{

  } catch (error){

  }
  res.status(200).json(users);
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);

  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () =>
  console.log(`Server rodando em: http://localhost:${port}`)
);
