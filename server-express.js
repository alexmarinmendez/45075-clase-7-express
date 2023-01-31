const express = require('express')

const app = express()






app.listen(8080, () => console.log('Server Up'))

app.get('/', (request, response) => {
    response.send('Hola Mundo!')
})

app.get('/user', (request, response) => {
    response.send({ user: 'Shakira' })
})