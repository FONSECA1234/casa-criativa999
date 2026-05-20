const db = require('./db')

db.query(`
    CREATE TABLE usuarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100),
        email VARCHAR(100)
    )
`, (err, res) => {

    if (err) {
        console.log(err)
    } else {
        console.log('Tabela criada com sucesso!')
    }

    db.end()
})