import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/carousel">Carousel</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
