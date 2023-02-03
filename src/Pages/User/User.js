import Header from '../../Components/UserComponents/Header/Header';
import NavBar from '../../Components/UserComponents/NavBar/NavBar';
import AboutPage from '../AboutPage';
import HomePage from '../HomePage';

const User = () => (
  <div id="homePage">
    <Header />
    <NavBar />
    <HomePage />
    <AboutPage />
  </div>
);

export default User;
