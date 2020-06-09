const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;
// 1 - iniciar o DB - remover as \\ dos itens db.serialize, db.run (toda a estrutura)
// linha 8 até a 50. executar nano src/database/db.js
//db.serialize(() => {
//  db.run(`
//      CREATE TABLE IF NOT EXISTS places (
//        id INTEGER PRIMARY KEY AUTOINCREMENT,
//        name TEXT,
//        image TEXT,
//        address TEXT,
//        complement TEXT,
//        state TEXT,
//        city TEXT,
//       items TEXT 
//      );
//    `)
//    const query = `
//      INSERT INTO places (
//        name,
//        image,
//       address,
//        complement,
//        state,
//        city,
//        items
//      ) VALUES (?,?,?,?,?,?,?);`
//    
//    const values = [
//      "Papersider",
//      "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
//      "Guilherme Gemballa, Jardim América",
//      "Nº 270",
//      "Santa Catarina",
//      "Rio do Sul",
//      "Papéis e papelão"
//    ]
//    
//   function afterInsetData(err){
//    if(err){
//      return console.log(err)
//    }
//    console.log("Cadastrado com Sucesso!")
//    console.log(this)
//   } 
//
//  db.run(query, values, afterInsetData)
//  
//  db.all(`SELECT * FROM places`, function(err, rows){
//    if(err){
//      return console.log(err)
//    }
//    console.log('Aqui estão seus registros')
//    console.log(rows)
//   })
//  db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
//    if(err){
//      return console.log(err)
//    }
//    console.log("Registro deletado com sucesso!")
//   })
//})



