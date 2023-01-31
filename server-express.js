const express = require('express')

const app = express()


const users = [
    { id: "1", name: "Shakira", gender: "F" },
    { id: "2", name: "Piqué", gender: "M" },
]



app.listen(8080, () => console.log('Server Up'))

app.get('/', (request, response) => {
    response.send('Hola Mundo!')
})

app.get('/user/:id/:gender', (request, response) => {
    const { id, gender } = request.params
    const user = users.find(item => item.id === id)
    if (!user) response.send({ error: "User not found", params: gender  })
    else response.send({ user: user.name, params: gender })
})