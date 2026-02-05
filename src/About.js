import marioAdrian from './assets/Mario and Adrian A.jpg';
import restaurant from './assets/restaurant.jpg';
import './styles/components/about.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* Left column */}
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. The chefs
            draw inspiration from Italian, Greek, and Turkish culture, and have a
            menu of 12–15 items that they rotate seasonally.
          </p>
        </div>

        {/* Right column */}
        <div className="about-images">
          <img
            src={marioAdrian}
            alt="Mario and Adrian in the kitchen"
            className="img-top"
          />
          <img
            src={restaurant}
            alt="Little Lemon restaurant interior"
            className="img-bottom"
          />
        </div>

      </div>
    </section>
  );
}

export default About;