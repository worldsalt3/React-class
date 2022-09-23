import Component2 from "./Component2"
import { memo } from "react"

const Component1 = ({ color, name }) => {
  console.log('component 1 render')
  return (
    <>
      <Component2 color={color} student={name} />
    </>
  )
}

export default memo(Component1)
