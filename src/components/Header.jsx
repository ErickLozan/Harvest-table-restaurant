import { Link } from "react-router-dom"
import '../MainLayout.css'
import React from "react"

function Header() {

    const line1Ref = React.useRef(null)
    const line2Ref = React.useRef(null)
    const line3Ref = React.useRef(null)

    const navRef = React.useRef(null)

    const toggleNav = () => {
        line1Ref.current.classList.toggle('nav__line1')
        line2Ref.current.classList.toggle('nav__line2')
        line3Ref.current.classList.toggle('nav__line3')
    }

    const openCloseNav = () => {
        toggleNav()
        navRef.current.classList.toggle('nav-opened')
    }

  return (
    <header className="header">
        <div className="header__container">
            <strong className="header__brand">Harvest Table</strong>

            <button onClick={openCloseNav} className="nav__toggle">
                <div ref={line1Ref}></div>
                <div ref={line2Ref}></div>
                <div ref={line3Ref}></div>
            </button>

            <nav className="nav" ref={navRef}>
                <ul className="nav__list">
                    <li className="nav__item"><Link to='/home' className="nav__link">Home</Link></li>
                    <li className="nav__item nav__item--dropdown">
                        <label htmlFor="dropwdown" className="nav__link nav__link--dropdown-trigger">
                            Menu
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="white" className="nav__dropdown-svg bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                            <input type="checkbox" id="dropwdown" hidden />
                        </label>
                        <div className="nav__dropdown">
                            <ul className="nav__dropdown-list">
                                <li className="nav__dropdown-item"><Link to='/menu/appetizers' className="nav__dropdown-link">Appetizers</Link></li>
                                <li className="nav__dropdown-item"><Link to='/menu/main-courses' className="nav__dropdown-link">Main Courses</Link></li>
                                <li className="nav__dropdown-item"><Link to='/menu/desserts' className="nav__dropdown-link">Desserts</Link></li>
                                <li className="nav__dropdown-item"><Link to='/menu/drinks' className="nav__dropdown-link">Drinks</Link></li>
                                <li className="nav__dropdown-item"><Link to='/menu' className="nav__dropdown-link">See all</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav__item"><Link to='/gallery' className="nav__link">Gallery</Link></li>

                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header