import logo from './assets/Logo.svg';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" />

<nav>
  <ul className="nav-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/#about">About</Link></li>
    <li><Link to="/#menu">Menu</Link></li>
    <li><Link to="/booking">Reservations</Link></li>
    <li><Link to="/#order-online">Order Online</Link></li>
    <li><Link to="/#login">Login</Link></li>
  </ul>
</nav>    </header>
  );
}

export default Header;