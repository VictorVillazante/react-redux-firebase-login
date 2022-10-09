import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'

const AuthRouter = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/login' element={<LoginScreen/>} />
            <Route exact path='/register' element={<RegisterScreen/>}/>
        </Routes>
    </Router>
  )
}

export default AuthRouter