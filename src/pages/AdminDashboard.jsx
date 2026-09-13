import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
    const [contacts, setContacts] = useState([])
    const totalMessages = contacts.length
    
    const navigate = useNavigate()
  
    useEffect(() => {
   const token = localStorage.getItem('adminToken')

if (!token) {
  navigate('/admin-login')
  return
}
 fetch('http://localhost:5000/api/contacts', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setContacts(data.contacts)
      }
    })
    .catch((error) => {
      console.error('Error fetching contacts:', error)
    })
}, [])
  return (
   <div className="admin-dashboard">
<a href="/" className="admin-back-link">
  ← Back to Website
</a>
<button
  className="admin-logout-button"
  onClick={() => {
    localStorage.removeItem('adminToken')
    navigate('/admin-login')
  }}
>
  Logout
</button>
      <h1>Admin Dashboard</h1>
      <div className="admin-stats">
  <div className="admin-stat-card">
    <span>Total Messages</span>
    <strong>{totalMessages}</strong>
  </div>
</div>
<div className="admin-table-wrapper">

     <table className="admin-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Message</th>
      <th>Date</th>
    </tr>
  </thead>

  <tbody>
    {contacts.map((contact) => (
      <tr key={contact.id}>
        <td>{contact.id}</td>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.message}</td>
        <td>
  {new Date(contact.created_at).toLocaleString()}
</td>
      </tr>
    ))}
  </tbody>
</table>
   </div>
   </div>
  )
}
export default AdminDashboard