import React from 'react'

const ModalContext = React.createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
    return React.useContext(ModalContext)
}

// eslint-disable-next-line react/prop-types
function ModalProvider({children}) {
    const [isOpened, setIsOpened] = React.useState(false)

    const openCloseModal = () => {
        setIsOpened(!isOpened)
    }

  return (
    <ModalContext.Provider value={{openCloseModal, isOpened}}>
        {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider