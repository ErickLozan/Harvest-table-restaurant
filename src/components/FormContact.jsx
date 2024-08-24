
function FormContact() {
  return (
    <section className="section contact">
        <div className="contact__brand">
            <strong className="">Harvest Table</strong>
            <p>Where Every Meal Feels Like Home</p>
        </div>

        <form onSubmit={e => e.preventDefault()} className="contact__form">
            <h3 className="contact__title">Contact us!</h3>
            <div className="contact__input-wrapper">
                <div className="contact__input">
                    <input type="text" id='name' placeholder=" " />
                    <label htmlFor="name">Name</label>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="contact__svg bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
            </div>

            <div className="contact__input-wrapper">
                <div className="contact__input">
                    <input type="text" id='email_address' placeholder=" " />
                    <label htmlFor="email_address">Email address</label>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="contact__svg bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                </svg>
            </div>

            <div className="contact__input-wrapper">
                <textarea type="text" id='message' placeholder=" " className="contact__textarea"></textarea>
                <label htmlFor="message" className="contact__textarea-label">Message</label>
            </div>

            <button type='submit' className="contact__submit">
                Send
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="contact__svg-send bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                </svg>
            </button>
        </form>
    </section>
  )
}

export default FormContact