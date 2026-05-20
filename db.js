const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'meusite',
    password: '03082010',
    port: 5432,
})

client.connect()

module.exports = client