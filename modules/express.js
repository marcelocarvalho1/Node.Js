const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.contentType("text/html");
    res.status(200).send('<h1>Hello, world</h1>');
});

app.get('/users', (req, res) =>{
    const users = [
        { name: "Marcelo", email: "marcelo@email.com", age: 30 },
        { name: "João", email: "joao@email.com", age: 28 },
        { name: "Ana", email: "ana@email.com", age: 25 },
        { name: "Lucas", email: "lucas@email.com", age: 20 },
      
      ];
      res.status(200).json(users)
})


const port = 8080;

app.listen(port, () => console.log(`Server rodando em: http://localhost:${port}`));
