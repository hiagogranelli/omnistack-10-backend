const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@omnistack-oflqv.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros
//Query params: req.query (Filtros, ordenação, paginação, etc)
//Route params: req.params (Identificar um recurso na alteração ou remoção)
//Body: req.body (Dados para criação ou alteração do registro)

//MongoDB (Banco não-relacional)

app.listen(3333);
