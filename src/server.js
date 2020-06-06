const express = require("express");
const server = express();

const db = require("./database/db");

server.use(express.static("public"));

server.use(express.urlencoded({ extended: true}));

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true
});

server.get("/", (request, response) => {
  return response.render("index.html")
});

server.get("/create-point", (request, response) => {
  return response.render("create-point.html")
});

server.post("/savepoint", (request, response) => {
    const query = `
      INSERT INTO places (
        name,
        image,
        address,
        complement,
        state,
        city,
        items
      ) VALUES (?,?,?,?,?,?,?);`
      
      const values = [
        request.body.name,
        request.body.image,
        request.body.address,
        request.body.complement,
        request.body.state,
        request.body.city,
        request.body.items
      ]

    function afterInsetData(err){
      if(err){
      console.log(err)
      return response.send("Erro no cadastro!");
    }
    console.log("Cadastrado com Sucesso!")
    console.log(this)
    return response.render("create-point.html", { saved: true }) 
  }
  db.run(query, values, afterInsetData);

})


server.get("/search", (request, response) => {

  const search = request.query.search;

  if (search == "") {
    return response.render("search-results.html", 
        { total: 0 });
  } 

  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err){
          return console.log(err)
        }
        const total = rows.length;
        return response.render("search-results.html", 
        { places: rows, total })
       });

});

server.listen(3333, () => {
  console.log('Back-end Started!')
});
