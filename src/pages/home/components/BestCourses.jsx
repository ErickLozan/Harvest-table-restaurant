import Burger from '../../../assets/Burger.jpg'
import Salad from '../../../assets/Salad.jpg'
import Breaded from '../../../assets/Breaded.jpg'
import Cake from '../../../assets/Cake.jpg'
import { Link } from 'react-router-dom'
import { useModal } from '../../../ModalProvider'

function BestCourses() {

    const courses = [
        {
          name: 'Grilled Burger',
          price: '20.00',
          image: Burger
        },
        {
          name: 'Vegetable Salad',
          price: '15.00',
          image: Salad
        },
        {
          name: 'Chicken Breaded',
          price: '25.00',
          image: Breaded
        },
        {
          name: 'Chocolate Cake',
          price: '30.00',
          image: Cake
        }
      ]

    const {openCloseModal} = useModal()

  return (
    <section className='section'>
        <h2 className='subtitle'>Some of our best courses!</h2>
        <p className='bestcourses__cta-p'><b>Dare to Discover Our Finest Dishes –</b> Indulge in a culinary experience like no other. Explore our gallery and let your taste buds be tempted by the flavors of Harvest Table.</p>
        <section className='bestcourses'>
          {courses.map((course, index) => (
            <article key={index} className='bestcourses__card'>
              <img src={course.image} alt={course.name} className='bestcourses__img'/>
              <div className='bestcourses__data'>
                <h4 className='bestcourses__name'>{course.name}</h4>
                <span className='bestcourses__price'>${course.price}</span>
              </div>
            </article>
          ))}
        </section>
        <div className='bestcourses__btns'>
          <button className='bestcourses__cta' onClick={openCloseModal}>Book now!</button>
          <Link to='/gallery' className='bestcourses__see-gallery'>See our gallery</Link>
        </div>
      </section>
  )
}

export default BestCourses