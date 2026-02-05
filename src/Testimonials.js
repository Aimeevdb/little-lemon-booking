import sofia from './assets/sofia.png';
import daniel from './assets/daniel.png';
import priya from './assets/priya.png';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonials-grid">

        {/* Sofia */}
<article className="testimonial-card">
  <img src={sofia} alt="Sofia enjoying a meal" />

  <div className="testimonial-content">
    <h3>Sofia</h3>
    <div className="stars">★★★★★</div>
    <p>“The food was absolutely amazing. I can’t wait to come back!”</p>
  </div>
</article>

{/* Daniel */}
<article className="testimonial-card">
  <img src={daniel} alt="Daniel smiling outdoors" />

  <div className="testimonial-content">
    <h3>Daniel</h3>
    <div className="stars">★★★★★</div>
    <p>“A warm, welcoming atmosphere and incredible flavors.”</p>
  </div>
</article>

{/* Priya */}
<article className="testimonial-card">
  <img src={priya} alt="Priya enjoying her meal" />

  <div className="testimonial-content">
    <h3>Priya</h3>
    <div className="stars">★★★★★</div>
    <p>“The best Mediterranean food I’ve had in years.”</p>
  </div>
</article>

      </div>
    </section>
  );
}

export default Testimonials;