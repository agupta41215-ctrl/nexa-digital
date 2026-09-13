import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import BusinessWebsite from './pages/BusinessWebsite.jsx'
import BusinessDemo from './pages/BusinessDemo.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AdminLogin from './pages/AdminLogin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />

        <Route
          path="/business-website"
          element={<BusinessWebsite />}
        />

        <Route
          path="/business-demo"
          element={<BusinessDemo />}
        />
        <Route
  path="/admin-login"
  element={<AdminLogin />}
/>
        <Route
  path="/admin"
  element={<AdminDashboard />}
/>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
