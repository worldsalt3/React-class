import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Nav from './Component/Nav/Nav.component'
// import SideBar from './Component/Sidebar/Sidebar'
import Dashboard from './Pages/Dashboard/Dashboard'
import Weather from './Pages/Weather/Weather'
import Settings from './Pages/Settingspage/Settings'

const App = () => {
  return(
      <>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='settings' element={<Settings/>} />
          <Route path='weather' element={<Weather />} />
        </Routes>
      </>
  )
}


export default App