import './Dashboard.css'
import Nav from '../../Component/Nav/Nav.component'
// import { Link } from 'react-router-dom'
// import Card from '../../Component/Card/Card'
import {useState } from 'react'
import Component1 from '../../Component/Component1'
// import ContactForm from '../../Component/Form/ContactForm'
// import Img2 from '../../assets/img2.svg'
// import Img3 from '../../assets/img3.jpg'





const Dashboard = () => {
  const [name, setName] = useState('Hammed')
  const [color, setColor] = useState(0)

  // const [toggle, setToggle] = useState(false)

//  function handleClick(){
//     return setToggle(prevState => !prevState)
//   }

  //  const data = [
  //     {id: 1, content: 'this is our first card', header: 'First Card', img : Img3, position: 'right'},
  //     {id: 2, content: 'this is our second card', header: 'second Card', img: Img2, position: 'left'},
  //     {id: 3, content: 'this is our Third card', header: 'Third Card', img: Img3, position: 'right'},
  //     {id: 4, content: 'this is our fourth card', header: 'Fourth Card', img: Img2, position: 'left'}

  //   ]


  return (
    <div>
      <Nav />
      <h1>DASHBOARD</h1>
      <Component1 color={color} name={name}/>
      <button onClick={() => {
        setName('Daniel')
        setColor((prevColor) => prevColor + 1 )
        }}>change name</button>

        
      {/* <h3>{content}</h3> */}
      <div>
        {/* <ContactForm /> */}
        {/* {data.map(
          (item, index) => { 
          const {img, content, header, id, position} = item
        return <Card header={header} content={content} key={index} img={img} id={id} position={position}
      />})} */}

        {/* <Card
          header={data[0].header}
          content={data[0].content}
          key={data[0].id}
          img={data[0].img}
        />
        <Card
          header={data[1].header}
          content={data[1].content}
          key={data[1].id}
          img={data[1].img}
        />
        <Card
          header={data[2].header}
          content={data[2].content}
          key={data[2].id}
          img={data[2].img}
        /> */}
        {/* <button onClick={handleClick}>Toggle</button> */}
      </div>
      {/* <button onClick={handleClick}>change content</button>
      <br />
      <Link to='settings'>go to settings Page</Link>
      <ContactForm /> */}
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
//               return <Card content={item.content} header={item.header}  key={item.id}/>
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