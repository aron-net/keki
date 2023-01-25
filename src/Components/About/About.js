import argo from '../Image/about.jpg';
import './About.css';

const About = () => (
  <div className="container-fluid pt-5">
    <div className="container">
      <div className="section-title position-relative text-center mx-auto mb-5 pb-3">
        <h2 className="text-primary font-secondary">About Us</h2>
        <h1 className="display-4 text-uppercase">Welcome To Keki</h1>
      </div>
      <div className="row gx-5">
        <div className="imgCon col-lg-5 mb-5 mb-lg-0">
          <div className="position-relative h-100">
            <img className="img-fluid position-absolute w-100 h-100" src={argo} alt="about-us" />
          </div>
        </div>
        <div className="col-lg-6 pb-5">
          <h4 className="mb-4">Delicious Cakes, Expertly Crafted</h4>
          <p className="mb-5">
            Satisfy your sweet tooth with Keki&apos;s online cake shop.
            Freshly made cakes delivered straight to your door. Wide variety of flavors and designs.
            Order now and make your occasion special!
          </p>
          <div className="row g-5">
            <div className="col-sm-6">
              <div className="fa-heartbeat-container d-flex align-items-center justify-content-center bg-primary border-inner mb-4">
                <i className="fa fa-heartbeat fa-2x text-white" />
              </div>
              <h4 className="text-uppercase">100% Healthy</h4>
              <p className="mb-0">Indulge in 100% healthy cakes from Keki, made with natural and organic ingredients. Try our gluten-free and vegan options today and taste the difference. </p>
            </div>
            <div className="col-sm-6">
              <div className="fa-heartbeat-container d-flex align-items-center justify-content-center bg-primary border-inner mb-4">
                <i className="fa fa-award fa-2x text-white" />
              </div>
              <h4 className="text-uppercase">Award Winning</h4>
              <p className="mb-0">Keki, an award-winning cake shop in Kenya, offers delicious and creative cakes. Order and taste the best.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
