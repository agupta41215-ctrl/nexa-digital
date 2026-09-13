require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
const JWT_SECRET = process.env.JWT_SECRET

// Middleware
app.use(cors())
app.use(express.json())

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})
// Test MySQL connection
db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err.message)
    return
  }

  console.log('MySQL connected successfully!')
})

// Test route
app.get('/', (req, res) => {
  res.send('Nexa Digital Backend is running!')
})

// Contact form API
app.post('/api/contact', (req, res) => {

  const { name, email, message } = req.body

  const sql = `
    INSERT INTO contacts (name, email, message)
    VALUES (?, ?, ?)
  `

  db.query(sql, [name, email, message], (err, result) => {

    if (err) {
      console.error('Database error:', err.message)

      return res.status(500).json({
        success: false,
        message: 'Failed to save contact'
      })
    }

    console.log('Contact saved successfully!')

    res.json({
      success: true,
      message: 'Contact saved successfully!'
    })

  })
})
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access token required'
    })
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: 'Invalid or expired token'
      })
    }

    req.user = user
    next()
  })
}
// Get all contact messages
app.get('/api/contacts', authenticateToken, (req, res) => {

  const sql = 'SELECT * FROM contacts ORDER BY created_at DESC'

  db.query(sql, (err, results) => {

    if (err) {
      console.error('Database error:', err.message)

      return res.status(500).json({
        success: false,
        message: 'Failed to fetch contacts'
      })
    }

    res.json({
      success: true,
      contacts: results
    })

  })
})
// Admin login API
app.post('/api/admin-login', (req, res) => {

  const { username, password } = req.body

  const sql = 'SELECT * FROM admins WHERE username = ?'

  db.query(sql, [username], async (err, results) => {

    if (err) {
      console.error('Database error:', err.message)

      return res.status(500).json({
        success: false,
        message: 'Server error'
      })
    }

    if (results.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      })
    }

    const admin = results[0]

    const passwordMatch = await bcrypt.compare(
      password,
      admin.password
    )

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      })
    }
    const token = jwt.sign(
  { id: admin.id, username: admin.username },
  JWT_SECRET,
  { expiresIn: '1h' }
)

    res.json({
      success: true,
      message: 'Login successful!',
      token
    })

  })
})
// Start server
const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})