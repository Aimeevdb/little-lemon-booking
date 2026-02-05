import Testimonials from './Testimonials';
import heroImage from './assets/hero.jpg';
import greekSalad from './assets/greek-salad.jpg';
import bruschetta from './assets/bruschetta.svg';
import lemonDessert from './assets/lemon-dessert.jpg';

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
  <div className="specials-header">
    <h2>This Week’s Specials!</h2>
    <button className="menu-button">Online Menu</button>
  </div>

  <div className="specials-grid">

    {/* Greek Salad */}
    <article className="special-card">
      <img src={greekSalad} alt="Greek Salad" />
      <div className="special-content">
        <div className="special-title-row">
          <h3>Greek Salad</h3>
          <span className="price">$12.99</span>
        </div>
        <p>
          A fresh mix of crisp vegetables, olives, and feta tossed in a bright
          Mediterranean dressing.
        </p>
        <button className="order-button">
          <span className="minus">-</span> Order <span className="plus">+</span>
        </button>
      </div>
    </article>

    {/* Bruschetta */}
    <article className="special-card">
      <img src={bruschetta} alt="Bruschetta" />
      <div className="special-content">
        <div className="special-title-row">
          <h3>Bruschetta</h3>
          <span className="price">$5.99</span>
        </div>
        <p>
          Grilled bread topped with ripe tomatoes, garlic, and herbs for a
          simple, vibrant Mediterranean bite.
        </p>
        <button className="order-button">
          <span className="minus">-</span> Order <span className="plus">+</span>
        </button>
      </div>
    </article>

    {/* Lemon Dessert */}
    <article className="special-card">
      <img src={lemonDessert} alt="Lemon Dessert" />
      <div className="special-content">
        <div className="special-title-row">
          <h3>Lemon Dessert</h3>
          <span className="price">$7.99</span>
        </div>
        <p>
          A light, layered lemon cake with bright citrus flavor and a smooth,
          creamy finish.
        </p>
        <button className="order-button">
          <span className="minus">-</span> Order <span className="plus">+</span>
        </button>
      </div>
    </article>

  </div>
  
</section>        
      {/* Testimonials Section */}
      <Testimonials />

    </main>
  );
}

export default Main;