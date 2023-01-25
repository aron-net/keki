import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

const NavBar = () => {
  const [showMenu, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!showMenu);
  };
  const shadow = `${showMenu ? 'navbar-collapse collapse' : 'navbar-collapse'}`;
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg px-3 px-lg-0">
      <a href="#home" className="navbar-brand d-block d-lg-none">
        <h1 className="m-0 text-uppercase text-white">
          <i className="fa fa-birthday-cake fs-1 text-primary me-3" />
          Keki
        </h1>
      </a>
      <button className="navbar-toggler" type="button" onClick={toggleMenu} onKeyDown={toggleMenu}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={shadow}>
        <div className="navbar-nav ms-auto mx-lg-auto py-0">
          <a href="#homePage" className="nav-item nav-link active">Home</a>
          <a href="about.html" className="nav-item nav-link">About Us</a>
          <a href="menu.html" className="nav-item nav-link">Menu & Pricing</a>
          <a href="team.html" className="nav-item nav-link">Master Chefs</a>
          <NavDropdown id="nav-dropdown-dark-example" title="Pages" menuVariant="white">
            <NavDropdown.Item href="service">Our Service</NavDropdown.Item>
            <NavDropdown.Item href="testimonial">Testimonial</NavDropdown.Item>
          </NavDropdown>
          <a href="contact" className="nave-item nav-link">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
