import { useState } from 'react'
import ReactLogo from './assets/react.svg?react'
import ViteLogo from './assets/vite.svg?react'
import './App.css'
import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <MemoryRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <div>
          <a href="https://vite.dev" target="_blank">
            <ViteLogo />
          </a>
          <a href="https://react.dev" target="_blank">
            <ReactLogo />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </MemoryRouter>
    </>
  )
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

export default App
