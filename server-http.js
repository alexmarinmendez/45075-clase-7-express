const http = require('http')

const server = http.createServer((request, response) => {
    console.log('Alguien me hizo una petición....')
    // response.end('Hola Mundo!!!')
    response.end('<h1 style="color: red">Hola Mundo en Rojo!</h1>')
    // response.end({ name: "Shakira" })
})

server.listen(8080, () => console.log('Server Up!'))