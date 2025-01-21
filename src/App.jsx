import { useState } from 'react'
import Home from './Home'
import Enter from './Enter'
import Question from './Question';
import Quiz from './Quiz'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Question/>} />
        <Route path='/home' element={<Quiz/>} />
      </Routes>
    </Router>
    
  )
}

export default App
