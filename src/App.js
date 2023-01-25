import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <HomePage />
      <AboutPage />
    </div>
  );
}

export default App;
