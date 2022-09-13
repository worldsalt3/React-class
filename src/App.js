import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './Component/Nav/Nav.component'
import SideBar from './Component/Sidebar/Sidebar'
import Dashboard from './Pages/Dashboard/Dashboard'
import Settings from './Pages/Settingspage/Settings'

const App = () => {
  return(
      <>
      <Nav />
      <div className='container'>
        <SideBar />
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='settings' element={<Settings/>} />
        </Routes>
      </div>
      </>
  )
}


export default App