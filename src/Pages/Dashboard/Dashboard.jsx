import './Dashboard.css'
import { Link } from 'react-router-dom'
import Card from '../../Component/Card/Card'
import {Component,   } from 'react'


// const Dashboard = () => {

// const [content, setContent] = useState(1)


//   return (
//     <div>
//       <h1>DASHBOARD</h1>
//       <h3>{content}</h3>
//       <button onClick={() => {setContent(prevContent => prevContent + 1)}}>change content</button>
//       <Link to='settings'>go to settings Page</Link>
//     </div>
//   )
// }

// export default Dashboard
export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Dashboard: 'DASHBOARD',
    }
  }

  render() {

      const {Dashboard} = this.state
    return (
      <div>
        <h1>{Dashboard}</h1>
        <div className='card-container'>
          <Card />
          <Card />
        </div>
        {/* <h3>{num}</h3>
        <h3>{content}</h3>
        <button onClick={() => this.setState({content: 'Lola now understands react', num : num + 1})}>change content</button>
        <Link to='settings'>go to settings Page</Link> */}
      </div>
    )
  }
}