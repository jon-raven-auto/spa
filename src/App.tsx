import './App.css'
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  const pageNames = ["Home", "About"];

export default function App() {
  return (
    <>
      <MemoryRouter initialEntries={["/home"]}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar pageNames={pageNames} />
            </div>
            <div className="col-md-8">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
      </MemoryRouter>
    </>
  )
}


export default App
