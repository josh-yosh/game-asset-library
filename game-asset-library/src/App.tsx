import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import HomePage from './pages/HomePage/HomePage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import AssetPage from './pages/AssetPage/AssetPage'

const base = import.meta.env.BASE_URL;

function App() {
  return (
  <Router basename={base}>
      <header className="header tiled-background">
        <Link className='website-title' to="/">
          <h1>Game Asset Library</h1>
        </Link>
      </header>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main className='page'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<ProjectPage />} />
            <Route path="/assets/:projectId/:assetType/:assetId" element={<AssetPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App