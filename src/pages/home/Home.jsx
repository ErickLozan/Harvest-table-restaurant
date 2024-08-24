import MainLayout from "../../layouts/MainLayout"
import AboutUs from "./components/AboutUs"
import BestCourses from "./components/BestCourses"
import Hero from './components/Hero'

import './styles.css'

function Home() {
  return (
    <MainLayout>

      <Hero/>

      <AboutUs/>

      <div className="container">
        <BestCourses/>
      </div>

    </MainLayout>
  )
}

export default Home