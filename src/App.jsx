
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Companies from './components/Companies'
import Footer from './components/Footer'
import About from './components/About'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
      <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
      </Router>
    </>
  )
}

export default App
