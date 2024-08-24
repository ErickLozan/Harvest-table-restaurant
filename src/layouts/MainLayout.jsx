import BookModal from '../components/BookModal'
import Footer from '../components/Footer'
import Header from '../components/Header'
import FormContact from '../components/FormContact'
import ModalProvider from '../ModalProvider'

import '../MainLayout.css'

// eslint-disable-next-line react/prop-types
function MainLayout({children}) {
  return (
    <ModalProvider>
        <Header />
        <BookModal/>
        {children}
        <div className="container">
          <FormContact/>
        </div>
        <Footer/>
    </ModalProvider>
  )
}

export default MainLayout