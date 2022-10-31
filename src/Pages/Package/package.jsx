import {useState} from 'react'
import MyVerticallyCenteredModal from '../../Component/Modal'


export function Package() {
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <button
        className='bg-primary text-light position-absolute top-50 start-50 translate-middle'
        onClick={() => setModalShow(true)}
      >
        show modal
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}
