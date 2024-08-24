import { useModal } from '../ModalProvider'

function BookModal() {

  const {isOpened, openCloseModal} = useModal()

  return (
    <div id='modal' className={`modal ${isOpened ? 'modal--opened' : ''}`}>
      <section className="modal__content">
        <button className='modal__close' onClick={openCloseModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg>
        </button>
        <form onSubmit={(e) => e.preventDefault()} className="modal__form">
          <h3 className="modal__title">Book Now!</h3>

          <div className="modal__input-wrapper">
            <div className="modal__input">
              <input type="text" id="fullname" placeholder=" " />
              <label htmlFor="fullname">Fullame</label>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="black"
              className="modal__svg bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </div>

          <div className="modal__input-wrapper">
            <div className="modal__input">
              <input type="number" id="phone" placeholder=" " />
              <label htmlFor="phone">Phone</label>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="black"
              className="modal__svg bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
          </div>

          <div className="modal__input-wrapper">
            <div className="modal__input">
              <input type="email" id="email" placeholder=" " />
              <label htmlFor="email">Email address</label>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="black"
              className="modal__svg bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
          </div>

          <div className='modal__datetime-container'>
            <span>Date & Time</span>

            <div className='modal__datetime'>
              <div className="modal__input-wrapper">
                <div className="modal__input">
                  <input type="date" id="date" placeholder=" " />
                </div>
              </div>

              <div className="modal__input-wrapper">
                <div className="modal__input">
                  <input type="time" id="hour" placeholder=" " />
                </div>
              </div>
            </div>
          </div>

          <div className="modal__input-wrapper">
            <div className="modal__input">
              <input type="number" id="n_persons" placeholder=" " />
              <label htmlFor="n_persons">Number of persons</label>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="black"
              className="modal__svg bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
          </div>

          <button type="submit" className="modal__submit">
            Send
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="white"
              className="modal__svg-send bi bi-send-fill"
              viewBox="0 0 16 16"
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
            </svg>
          </button>
        </form>
      </section>
    </div>
  );
}

export default BookModal;
