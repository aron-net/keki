import { Route, Routes } from 'react-router-dom';
import About from '../Components/About/About';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import NavBar from '../Components/NavBar/NavBar';

const UserPage = () => (
  <>
    <Header />
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
);

export default UserPage;
