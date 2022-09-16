import './Dashboard.css'
import { Link } from 'react-router-dom'
// import Card from '../../Component/Card/Card'
import {useState } from 'react'
import ContactForm from '../../Component/Form/ContactForm'


const Dashboard = () => {

  const [content, setContent] = useState(1)

 function handleClick(){
    return setContent(prevContent => prevContent + 1)
  }


  return (
    <div>
      <h1>DASHBOARD</h1>
      <h3>{content}</h3>
      <button onClick={handleClick}>change content</button>
      <br />
      <Link to='settings'>go to settings Page</Link>
      <ContactForm />
    </div>
  )
}

export default Dashboard
// export default class Dashboard extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       Dashboard: 'DASHBOARD',
//     }
//   }

//   render() {
//     // let h3 = 'First Card'
//     const data = [
//       {id: 1, content: 'this is our first card', header: 'First Card'},
//       {id: 2, content: 'this is our second card', header: 'second Card'},
//       {id: 3, content: 'this is our Third card', header: 'Third Card'},
//       {id: 4, content: 'this is our fourth card', header: 'Fourth Card'}

//     ]
//       const {Dashboard} = this.state
//     return (
//       <div>
//         <h1>{Dashboard}</h1>
//         <div className='card-container'>
//           {/* <Card content='red'/> */}
//           {
//             data.map((item) => {
//               return <Card content={item.content} header={item.header} key={item.id}/>
//             })
//           }
//           {/* <Card content='this is our first card' header={h3}/>
//           <Card content='this is our second card' header='Second Card'/> */}
//         </div>
//         {/* <h3>{num}</h3>
//         <h3>{content}</h3>
//         <button onClick={() => this.setState({content: 'Lola now understands react', num : num + 1})}>change content</button>
//         <Link to='settings'>go to settings Page</Link> */}
//       </div>
//     )
//   }
// }