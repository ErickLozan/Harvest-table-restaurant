import { Link } from "react-router-dom";
import "../MainLayout.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__brand">
          <strong>Harvest Table</strong>
          <p>Where Every Meal Feels Like Home</p>
        </div>

        <div className="footer__location">
          <h4 className="footer__subtitle">Location</h4>

          <p className="footer__location-info">
            123 Farmstead Lane <br /> Greenfield, GA 12345 <br /> United States
          </p>
          <p className="footer__location-info">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="footer__location-info">
            <strong>Email:</strong> info@harvesttable.com
          </p>
        </div>

        <div className="footer__hours">
          <h4 className="footer__subtitle">Opening Hours</h4>
          <ul className="footer__hours-list">
            <li className="footer__hours-item">
              <strong>Monday - Friday:</strong> 10:00 AM - 9:00 PM
            </li>
            <li className="footer__hours-item">
              <strong>Saturday:</strong> 11:00 AM - 8:00 PM
            </li>
          </ul>
        </div>

        <div className="footer__navigation">
          <h4 className="footer__subtitle">Navigation</h4>
          <ul className="footer__navigation-list">
            <li className="footer__navigation-item">
              <Link to="/home" className="footer__navigation-link">Home</Link>
            </li>
            <li className="footer__navigation-item">
              <Link to="/menu" className="footer__navigation-link">Menu</Link>
            </li>
            <li className="footer__navigation-item">
              <Link to="/gallery" className="footer__navigation-link">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
      <span className="footer__copy">&copy; Harvest Table</span>
    </footer>
  );
}

export default Footer;
