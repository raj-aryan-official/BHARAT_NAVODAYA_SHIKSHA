import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import CourseDetail from './pages/CourseDetail'
import Highlights from './pages/Practice'
import Events from './pages/Events'
import Login from './pages/Login'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import StageDetails from './pages/StageDetails'
import Stages from './pages/Stages'
import Membership from './pages/Scholarship'
import ForgotPassword from './pages/ForgotPassword'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en')
  const [darkMode, setDarkMode] = useState(false)

  return (
    <Router>
      <ScrollToTop />
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <Header 
          language={language} 
          setLanguage={setLanguage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/events" element={<Events />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/stages" element={<Stages />} />
            <Route path="/stages/:stageId" element={<StageDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
