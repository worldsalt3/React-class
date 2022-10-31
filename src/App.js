import './App.css'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Nav from './Component/Nav/Nav.component'
// import SideBar from './Component/Sidebar/Sidebar'
import Dashboard from './Pages/Dashboard/Dashboard'
import Weather from './Pages/Weather/Weather'
import Settings from './Pages/Settingspage/Settings'
import TailwindExample from './Pages/TailwindExample'
import UseRef from './Pages/UseRef/UseRef'
import UseReducer from './Pages/useReducer/UseReducer'
import { Package } from './Pages/Package/package'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='settings' element={<Settings />} />
        <Route path='weather' element={<Weather />} />
        <Route path='tailwind' element={<TailwindExample />} />
        <Route path='UseRef' element={<UseRef />} />
        <Route path='useReducer' element={<UseReducer />} />
        <Route path='package' element={<Package />} />
      </Routes>
    </>
  )
}


export default App