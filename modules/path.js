const path = require('path');

// __filename - caminho completo do arquivo atual
console.log(path.basename(__filename)); 

// __dirname - caminho completo do diretório atual
console.log(path.dirname(__filename));

//Extensão do arquivo
console.log(path.extname(__filename));

// Criar um objeto Path
console.log(path.parse(__filename)) ;

//Juntar caminhos

console.log(path.join(__dirname, 'test', 'test.html'));


