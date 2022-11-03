const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "carro",
});

db.connect();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log("vivo");
})

app.post('/cadastrar', (req, res) => {
    const { marca } = req.body;
    const { modelo } = req.body;
    const { cor } = req.body;
    const { ano } = req.body;
    const { ano_modelo } = req.body;
    const { cambio } = req.body;

    let SQL = "INSERT INTO carros(id, marca, modelo, cor, ano_fabricacao, ano_modelo,tipo_cambio) VALUES('',?, ?, ?, ?, ?, ?)"
    db.query(SQL,[marca, modelo, cor, ano, ano_modelo, cambio],(err, result) => {
        console.log(err)
        // console.log(marca)
    });
})

// app.get('/', (req, res) => {
//     let SQL = "INSERT INTO carros(id, marca, modelo, cor, ano_fabricacao, ano_modelo,tipo_cambio) VALUE('','a','b','c','22','23','manual')"
// });

// connection.end();


app.listen(3003, () => {
    console.log("Servidor rodando")
})