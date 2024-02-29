
const http  = require('http');

http.createServer( (req, res) => {

    //esto le dice al navegador el tipo de archivo que se va a descargar 
    // res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type':'application/csv'});

    // const persona = {
    //     id: 1,
    //     nombre: 'Jorge'
    // }

    res.write('Hola Mundo');
    // res.write('1, jorge\n');
    // res.write('2, alejandra\n');
    // res.write('3, pedro\n');
    // res.write('4, maria\n');
    res.end();

})
.listen( 8080 );

console.log('escuchando el puerto', 8080)