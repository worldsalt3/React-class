import './Dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>DASHBOARD</h1>
      <Link to='settings'>go to settings Page</Link>
    </div>
  )
}

export default Dashboard