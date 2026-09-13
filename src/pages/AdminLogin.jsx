import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function AdminLogin() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
const navigate = useNavigate()

 const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const response = await fetch('https://nexa-digital-production-62b7.up.railway.app/api/admin-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })

    const data = await response.json()

    console.log(data)

    if (data.success) {
  localStorage.setItem('adminToken', data.token)
  navigate('/admin')
} else {
      alert(data.message)
    }

  } catch (error) {
    console.error('Login error:', error)
    alert('Unable to connect to server')
  }
}

  return (
    <div className="admin-login">

      <div className="admin-login-box">

        <h1>Admin Login</h1>

        <p>
          Login to access the dashboard.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label htmlFor="username">
              Username
            </label>

            <input
              type="text"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>


          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default AdminLogin