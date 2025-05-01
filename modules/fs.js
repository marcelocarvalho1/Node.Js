const fs = require("fs");
const path = require("path");

//Criar uma pasta (obs: o caminho deve ser absoluto)
fs.mkdir(path.join(__dirname, "/test"), (err) => {
  if (err) {
    return console.error("Erro ao criar a pasta:", err);
  }
  console.log("Pasta criada com sucesso!");
});

//Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello World!",
  (err) => {
    if (err) {
      return console.error("Erro ao criar o arquivo:", err);
    }
    console.log("Arquivo criado com sucesso!");
    //Adicionar conteúdo a um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "\nHello Marcelo!",
      (err) => {
        if (err) {
          return console.error("Erro ao adicionar conteúdo ao arquivo:", err);
        }
        console.log("Conteúdo adicionado com sucesso!");
      }
    );
    //Ler arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf-8",
      (err, data) => {
        if (err) {
          return console.error("Erro ao ler o arquivo:", err);
        }
        console.log("Conteúdo do arquivo:", data);
      }
    );
  }
);
