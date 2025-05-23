const express = require("express");
const UserModel = require("../src/models/user.models");

const app = express();

//Middlewares
app.use(express.json());

//Middleware para fazer o parse de requisições JSON
app.set("view engine", "ejs");
app.set('views', 'src/views');

//Define EJS como mecanismo de template para renderização de views
app.use((req, res, next) =>{
console.log(`Request Type: ${req.method}`)

next();

} )

// Renderização de view com EJS
app.get('/view/users', async (req, res)=> {
 const users = await UserModel.find({})

  res.render("index", {users});
})

//Buscar todos os usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Buscar usuário por ID
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Criar um novo usuário
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Atualizar campos de um usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Deletar usuário
app.delete("/users/:id", async (req, res)=> {
  try{
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id)

    res.status(200).json(user);

  } catch (error){
    res.status(500).send(error.message)

  }

})

const port = 8080;

app.listen(port, () =>
  console.log(`Server rodando em: http://localhost:${port}`)
);
