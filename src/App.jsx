import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TreemapPage from './pages/TreemapPage.jsx'

function App() {

  return (
    <div className='bg-[#151435] overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TreemapPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
