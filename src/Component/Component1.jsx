import Component2 from "./Component2"
import { memo } from "react"

const Component1 = () => {
  console.log('component 1 render')

  return (
    <>
      <Component2 />
    </>
  )
}

export default memo(Component1)
