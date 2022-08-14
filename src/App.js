import './App.css'
import Banner from './components/Banner'
import Contact from './components/Contact'
import { NavBar } from './components/NavBar'
import Project from './components/Project'
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default App
