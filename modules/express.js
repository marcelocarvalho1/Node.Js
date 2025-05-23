const express = require("express");
const UserModel = require("../src/models/user.models");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set('views', '..src/views');
//middlewares
app.use((req, res, next) =>{
console.log(`Request Type: ${req.method}`)

next();

} )

app.get('/view/users', async (req, res)=> {
  res.render("index");
})

//pegar todos os users
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//pegar o user por id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//criar user
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//atualizar algum campo
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//delete
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
