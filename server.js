import express from "express";
const app = express();
app.listen(3000, (req, res) =>{
    console.log("Servidor está ativo..");
});
app.get("/api", (req, res) =>{
    res.status(200).send("boas vindas ao servidor");
});