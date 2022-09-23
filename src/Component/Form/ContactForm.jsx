import './ContactForm.css'
import {useState} from 'react'

function ContactForm () {

    const [value, setValue] = useState(
        {username: '',
         password: '',
         car: ''
        }
        )

    function handleChange (e) {
        const name = e.target.name
        const value = e.target.value
       return setValue(prevState => {return {...prevState, [name] : value}})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(value)
        setValue({ username: '', password: '' })
        return console.log('sent to the server')

    }
    console.log('contact form rendered')

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='username'
            value={value.username || ''}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type='password'
            name='password'
            value={value.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <select name="car" value={value.car} onChange={handleChange}>
            <option value="Volvo">Volvo</option>
            <option value="Toyota">Toyota</option>
            <option value="Benz">Benz</option>
            <option value="Lexus">Lexus</option>
            <option value="Kia">Kia</option>
          </select>
          <br />
          <br />
          <button type='submit'>submit</button>
        </form>
      </div>
    )
}
export default ContactForm