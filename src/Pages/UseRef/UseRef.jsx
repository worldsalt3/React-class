import {useState, useRef, useEffect} from 'react'

const UseRef = () => {

    const [input, setInput] = useState('')
    const [color, setColor] = useState( {
        border: '1px solid red', 
        bgcolor: 'violet'
    })

    // previousCount.current = 0
    // useRef return {current : 0}
    const inputText = useRef() 
    const button = useRef()

    console.log('first')
    // function increase() {
        //       count.current = count.current + input.length
   
    // }

    // console.log(previousCount.current)

    useEffect(() => {
        console.log('last')
        inputText.current.style.border = color.border
        button.current.style.backgroundColor = color.bgcolor

    }, [color])



  return (
    <div>
      <input
        ref={inputText}
        type='text'
        name='email'
        id='email'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() =>
          setColor({
            border: '1px solid violet',
            bgcolor: 'red',
          })
        }
      >
        change button color
      </button>
      <button ref={button}>Ref example</button>
      {/* <p>PREVIOUS COUNT is {count.current}</p>
      <button onClick={increase}>increement useref</button> */}
    </div>
  )
}

export default UseRef