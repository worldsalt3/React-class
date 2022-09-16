import './Card.css'
import IdontKnow from '../../assets/bx_bx-map.svg'
// import  { Component } from 'react'

const Card = (props) => {
  const {content, header} = props
  return (
    <div className='card'>
      <img src={IdontKnow} alt='' srcset='' />
      <h3>{header}</h3>
      <p>{content}</p>

    </div>
  )
}

export default Card

// class Card extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       color : 'yellow',
//       content : ''
//     }
//   }

  // static getDerivedStateFromProps(props, state) {
  //     return {color: 'this is changed'}
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({color: 'red'})
  //   }, 1000)
  // }

  // static getDerivedStateFromProps(props, state) {
  //     return {content:  props.content}
  // }

  // shouldComponentUpdate() {
  //   return false
  // }

  // getSnapshotBeforeUpdate() {

  // }

  // componentDidUpdate() {

  // }

//   handleChange = () => {
//     this.setState({content:  'this is updated'})
//   }

//   render() {
//     const {color, content} =  this.state
//     return (
//       <div className='card'>
//         <h3>{color}</h3>
//         <h5>{content}</h5>
//         <button onClick={this.handleChange}>change content</button>
//       </div>
//     )
  
// }
// }

// export default Card