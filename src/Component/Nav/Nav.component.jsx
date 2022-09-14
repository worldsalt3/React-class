import { Component, useState } from 'react'
import './Nav.style.css'

// export default function Nav() {
//   const [menuData, setMenuData] = useState([
//   'Menu',
//     'About Us',
//    'Services',
//      'Contact'
//     ])

//   return (
//     <div className='nav'>
//       <div>LOGO</div>
//       <nav>
//         <ul className="nav-ul">
//           {/* <li>{menuData[0]}</li>
//           <li>{menuData[1]}</li>
//           <li>{menuData[2]}</li>
//           <li>{menuData[3]}</li> */}
//           {
//             menuData.map((item) => {
//            return  <li>{item}</li>
//           })
//           }
//         </ul>
//       </nav>
//     </div>
//   )
// }

export default class Nav extends Component {
  constructor(props) {
    super(props)
  
    this.state = [
  'Menu',
    'About Us',
   'Services',
     'Contact'
    ]
  }

  render() {
    return (
    <div className='nav'>
      <div>LOGO</div>
      <nav>
        <ul className="nav-ul">
          {/* <li>{this.state.menu}</li>
          <li>{this.state.aboutUs}</li>
          <li>{this.state.services}</li>
          <li>{this.state.contact}</li> */}
        {
            this.state.map((item) => {
                return <li>{item}</li>
            })
        }
        </ul>
      </nav>
    </div>
  )
  }
}

