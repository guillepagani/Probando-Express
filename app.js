// Importamos Librerias
const express = require  ('express');
const path = require ('path');

//Creamos nuestro servidor 
const server = express ();

//Servimos archivos estáticos (css, js, imagenes, etc...)
server.use(express.static(path.join(__dirname, "public")));

//Rutas para servir archivos html
server.get('/', (req, res) =>{
    res.sendfile(path.join(__dirname, '/views/index.html'));
})

server.get('/babbage', (req, res) =>{
    res.sendfile(path.join(__dirname, '/views/babbage.html'));
})

server.get('/berners-lee', (req, res) =>{
    res.sendfile(path.join(__dirname, '/views/berners-lee.html'));
})

server.get('/clarke', (req, res) =>{
    res.sendfile(path.join(__dirname, '/views/clarke.html'));
})

server.get('/hamilton', (req, res) =>{
    res.sendfile(path.join(__dirname, '/views/hamilton.html'));
})

server.get('/hopper', (req, res) =>{
    res.sendfile(path.join(__dirname, '/views/hopper.html'));
})

server.get('/lovelace', (req, res) =>{
    res.sendfile(path.join(__dirname, '/views/lovelace.html'));
})

server.get('/turing', (req, res) =>{
    res.sendfile(path.join(__dirname, '/views/turing.html'));
})

//Iniciamos nuestro sdervicio en el puerto 3030
server.listen(3030);

