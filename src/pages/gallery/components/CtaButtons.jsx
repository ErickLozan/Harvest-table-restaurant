import { Link } from "react-router-dom"
import { useModal } from "../../../ModalProvider"

function CtaButtons() {

    const {openCloseModal} = useModal()

  return (
    <div className='gallery__cta-container'>
        <button className='gallery__cta-book' onClick={openCloseModal}>Book now!</button>
        <Link to='/menu' className='gallery__cta-menu'>See our menu</Link>
    </div>
  )
}

export default CtaButtons