import Testimonials from './Testimonials';
import heroImage from './assets/hero.jpg';

function Main() {
  return (
    <main>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant focused on traditional
            recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>

        <img
          className="hero-image"
          src={heroImage}
          alt="Little Lemon restaurant server holding food"
        />
      </section>

      {/* Specials Section */}
      <section className="specials">
        <h2>This Week’s Specials!</h2>

        <div className="specials-grid">
          <article className="card">
            <h3>Greek Salad</h3>
            <p>A fresh mix of crisp vegetables, olives, and feta tossed in a bright Mediterranean dressing.</p>
            <button>Order</button>
          </article>

          <article className="card">
            <h3>Bruschetta</h3>
            <p>Grilled bread topped with ripe tomatoes, garlic, and herbs for a simple, vibrant Mediterranean bite.</p>
            <button>Order</button>
          </article>

          <article className="card">
            <h3>Lemon Dessert</h3>
            <p>A light, layered lemon cake with bright citrus flavor and a smooth, creamy finish.</p>
            <button>Order</button>
          </article>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

    </main>
  );
}

export default Main;