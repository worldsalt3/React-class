import './ContactForm.css'
import {useState} from 'react'

function ContactForm () {
    const [value, setValue] = useState('')
    function handleChange (e) {
       return setValue(e.target.value)
    }
    return(
        <div>
            <form>
                <input type="text" name='input' value={value} onChange={handleChange}/>
                <p>{value}</p>
            </form>
        </div>
    )
}
export default ContactForm