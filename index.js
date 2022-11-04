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
    });
})

app.get('/getCarros', (req, res) => {
    let SQL = "SELECT * FROM carros"
    db.query(SQL, (err,result)=>{
        if(err) console.log(err);
        else res.send(result);
    })
})


app.listen(3003, () => {
    console.log("Servidor rodando")
})