import Component3 from "./Component3"

function Component2(props) {
  console.log('component 2 render')
  const { color, student } = props
  return (
    <>
      <h3>{student}</h3>
      <Component3  />
    </>
  )
}


export default Component2