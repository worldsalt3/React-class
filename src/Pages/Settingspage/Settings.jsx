import './Settings.css'
import { Link } from 'react-router-dom'
import ContactForm from '../../Component/Form/ContactForm'

const Settings = () => {
  return (
    <div>
        <h1>SETTINGS</h1>
        <Link to='/'>go to Dashboard</Link>
        <ContactForm />
    </div>
  )
}

export default Settings