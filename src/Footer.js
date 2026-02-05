import footerImage from './assets/Mario and Adrian b.jpg';
import './styles/components/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">

        {/* Image column FIRST */}
        <div className="footer-image">
          <img src={footerImage} alt="Little Lemon Footer Graphic" />
        </div>

        {/* Column 1 */}
        <div className="footer-column">
          <h4>Restaurant Info</h4>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
            <li>Hours of Operation</li>
            <li>Reservations</li>
            <li>Directions / Map</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>Menu</li>
            <li>Order Online</li>
            <li>Catering</li>
            <li>Gift Cards</li>
            <li>About Us</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h4>Legal & Social</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Accessibility Statement</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Social Media Links</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;