require('dotenv').config()

const mysql = require('mysql2')
const bcrypt = require('bcrypt')

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

const username = 'admin'
const password = 'Aman@2005'

bcrypt.hash(password, 10, (err, hashedPassword) => {
  if (err) {
    console.error('Hash error:', err)
    return
  }

  const sql = `
    INSERT INTO admins (username, password)
    VALUES (?, ?)
  `

  db.query(sql, [username, hashedPassword], (err, result) => {
    if (err) {
      console.error('Database error:', err.message)
      return
    }

    console.log('Railway admin created successfully!')
    db.end()
  })
})