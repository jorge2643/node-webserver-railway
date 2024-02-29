require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;


//TODO required hbs - Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Para servir contenido estático. Le dice a la app que muestre lo que está en la carpeta public. O el path
app.use(express.static('public'));

//si la ruta no se encuentra en la carpeta publica, revisa las siguientes para caer allí 

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jorge Rodriguez',
        titulo: 'Curso de node'
    });
  })

// app.get('/hola-mundo', (req, res) => {
//     res.send('Nueva web hola mundo')
//   })

//   app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
//   })

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jorge Rodriguez',
        titulo: 'Curso de node'
    });
  })

//   app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
//   })

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Jorge Rodriguez',
        titulo: 'Curso de node'
    });
  })

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.html');
//   })


//app.listen(8080)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })