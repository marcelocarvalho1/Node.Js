const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home</h1>");
  }

  if (req.url === "/users") {
    const users = [
      { name: "Marcelo", email: "marcelo@email.com", age: 30 },
      { name: "João", email: "joao@email.com", age: 28 },
      { name: "Ana", email: "ana@email.com", age: 25 },
      { name: "Lucas", email: "lucas@email.com", age: 20 },
    
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => {
  console.log(`Server rodando em: http://localhost:${port}/`);
});
