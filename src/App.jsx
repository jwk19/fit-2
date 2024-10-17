import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import WorkoutLog from './components/WorkoutLog'
import Goals from './components/Goals'
import FitnessGroups from './components/FitnessGroups'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <header>
          <div className="header-content">
            <h1>Fitness Tracker</h1>
            <div>
              <button onClick={toggleDarkMode} className="dark-mode-toggle">
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </div>
          <nav>
            <NavLink to="/" end>Dashboard</NavLink>
            <NavLink to="/workout-log">Workout Log</NavLink>
            <NavLink to="/goals">Goals</NavLink>
            <NavLink to="/groups">Fitness Groups</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/workout-log" element={<WorkoutLog />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/groups" element={<FitnessGroups />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App