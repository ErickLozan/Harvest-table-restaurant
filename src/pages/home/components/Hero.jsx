import { Link } from "react-router-dom";
import { useModal } from "../../../ModalProvider";
import '../styles.css'

function Hero() {

  const {openCloseModal} = useModal()

  return (
    <section className="hero">

      <div className="hero__deco"></div>

      <div className="hero__container">
        <h1 className="hero__title">Harvest Table</h1>
        <p className="hero__slogan">Where Every Meal Feels Like Home</p>
        <div className="hero__cta-container">
          <button className="hero__cta1" onClick={openCloseModal}>
            Book now!
          </button>
          <Link to="/menu" className="hero__cta2">See our menu</Link>
        </div>
        <a href='#about-us' className="hero__svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#ffffff30" className="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Hero;
