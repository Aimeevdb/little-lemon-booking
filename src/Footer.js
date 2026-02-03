import footerImage from './assets/Mario and Adrian A.jpg'; // adjust name as needed

function Footer() {
  return (
    <footer className='footer'>
      <img src={footerImage} alt="Little Lemon Footer Graphic" />

      <section className="footer-info">
        <h4>Restaurant Info</h4>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
          <li>Hours of Operation</li>
          <li>Reservations</li>
          <li>Directions / Map</li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;