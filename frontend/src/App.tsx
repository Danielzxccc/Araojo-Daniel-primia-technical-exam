import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Positions from '@/pages/Positions'
import Layout from '@/pages/Layout'
import NewPosition from '@/pages/NewPosition'
import Position from '@/pages/Position'
import Candidates from '@/pages/Candidates'
import NewCandidate from './pages/NewCandidate'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<Positions />}
          />
          <Route
            path='/position/:positionid'
            element={<Position />}
          />
          <Route
            path='/new-position'
            element={<NewPosition />}
          />
          <Route
            path='/candidates'
            element={<Candidates />}
          />
          <Route
            path='/new-candidate'
            element={<NewCandidate />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
