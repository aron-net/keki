import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from '../Modal/Modal';
import './Home.css';

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-start">
          <div className="col-lg-8 text-center text-lg-start">
            <h1 className="font-secondary text-primary mb-4">Super Crispy</h1>
            <h1 className="display-1 text-uppercase text-white mb-4">Keki</h1>
            <h1 className="text-uppercase text-white">The Best Cake Online Shop</h1>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <Button onClick={() => setModalShow(true)} className="btn-play"><span /></Button>
              <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block"> Play Video </h5>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
