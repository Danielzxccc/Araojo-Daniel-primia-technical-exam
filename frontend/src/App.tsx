import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Positions from '@/pages/Positions'
import Layout from '@/pages/Layout'
import NewPosition from '@/pages/NewPosition'
import Position from '@/pages/Position'

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
        </Route>
      </Routes>
    </Router>
  )
}

export default App
