// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import HomePage from './pages/HomePage/HomePage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import AssetPage from './pages/AssetPage/AssetPage'

const base = import.meta.env.BASE_URL;

function App() {
  return (
  <Router basename={base}>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ padding: '1rem', flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<ProjectPage />} />
            <Route path="/models/:projectId/:modelId" element={<AssetPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App