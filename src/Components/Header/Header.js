import Container from '../../UI/Container';
import Pane from '../../UI/Pane';
import './Header.css';

const Header = () => (
  <div className="container-fluid px-0 d-none d-lg-block">
    <div className="row gx-o">
      <Container className="bg-secondary py-3">
        <Pane>
          <i className="bi bi-envelope fs-1 text-primary me-3" />
          <div className="text-start">
            <h6 className="text-uppercase mb-1">Email us</h6>
            <span>salearyo@gmail.com</span>
          </div>
        </Pane>
      </Container>
      <Container className="bg-primary border-inner py-3">
        <Pane>
          <a href="#Home" className="navbar-brand">
            <h1 className="m-0 text-uppercase text-white">
              <i className="fa fa-birthday-cake fs-1 text-dark me-3" />
              KEKI
            </h1>
          </a>
        </Pane>
      </Container>
      <Container className="bg-secondary py-3">
        <Pane>
          <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
          <div className="text-start">
            <h6 className="text-uppercase mb-1">Call Us</h6>
            <span>+254720851998</span>
          </div>
        </Pane>
      </Container>
    </div>
  </div>
);

export default Header;
