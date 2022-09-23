import { useState} from 'react'
import './Nav.style.css'


export default function Nav() {
  const [menuData, setMenuData] = useState([
  'Menu',
    'About Us',
   'Services',
     'Contact'
    ])

    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
      return setToggle(prevToggle => !prevToggle)
    }

    console.log('re-render')

  return (
    <div className='nav'>
      <div>LOGO</div>
      <nav>
        <ul className={toggle ? 'nav-ul' : 'nav-ul-display'}>
          {/* <li>{this.state.menu}</li>
          <li>{this.state.aboutUs}</li>
          <li>{this.state.services}</li>
          <li>{this.state.contact}</li> */}
          {menuData.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </nav>
      <div className='hamburger' onClick={handleToggle}>
        {toggle ? <span>&#9776;</span> : <span>&times;</span>}
        {/* {toggle && <span>&#9776;</span>}
        {!toggle && <span>&times;</span>} */}
      </div>
    </div>
  )
}

// export default class Nav extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = [
//   'Menu',
//     'About Us',
//    'Services',
//      'Contact'
//     ]
//   }

//   render() {
//     return (
//     <div className='nav'>
//       <div>LOGO</div>
//       <nav>
//         <ul className="nav-ul">
//           {/* <li>{this.state.menu}</li>
//           <li>{this.state.aboutUs}</li>
//           <li>{this.state.services}</li>
//           <li>{this.state.contact}</li> */}
//         {
//             this.state.map((item, index) => {
//                 return <li key={index}>{item}</li>
//             })
//         }
//         </ul>
//       </nav>
//       <div className="hamburger" onClick={}>
//         &#9776;
//       </div>
//     </div>
//   )
//   }
// }

