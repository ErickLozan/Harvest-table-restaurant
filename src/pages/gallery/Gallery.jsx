import MainLayout from '../../layouts/MainLayout'
import './styles.css'
import CtaButtons from './components/CtaButtons'

function Gallery() {

  const images = [
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1267315/pexels-photo-1267315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]

  return (
    <MainLayout>
      <div style={{ marginTop: 100 }} className='container'>
        <h2 className='gallery__title'>Gallery</h2>

        <div className='gallery__container'>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`image_${index}`}/>
          ))}
        </div>

        <CtaButtons/>
      </div>
    </MainLayout>
  )
}

export default Gallery