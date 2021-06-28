//criar um novo servidor - ok 

const express = require('express')
const app=express()
const cidades= require ("./data/estados-cidades.json")
  

app.get("/", (request,response ) =>{
    response.status(200).send("Oie! <3")
})

app.get("/estados", (request, response) =>{
    response.status(200).send(cidades)
})

app.get("/:siglas", (request, response)=> {
    const siglaSolicitada = request.params.siglas
    console.log(siglaSolicitada)

    response.status(200).send(cidades.find(siglas => siglas.sigla == siglaSolicitada))
})

app.listen(8080, () =>{
    console.log("meu servidor rodando na porta 8080") 
 })

