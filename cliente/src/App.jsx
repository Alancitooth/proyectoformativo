import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/taks' element={<h1>taks Page</h1>}/>
          <Route path='/add-task' element={<h1>Page add taks</h1>}/>
          <Route path='/taks/:id' element={<h1>Home Page</h1>}/>
          <Route path='/profile' element={<h1>Home Page</h1>}/>
        </Routes>
      </Router>
    </AuthProvider>
    </>
  )
}

export default App
