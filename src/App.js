import React, { useContext } from 'react';
import AuthContext from './Store/auth-context';
import Login from './Components/Login/Login';
import UserPage from './Pages/UserPage';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>

      <main id="homePage">
        {!isLoggedIn && <Login />}
        {isLoggedIn && <UserPage />}
      </main>
    </>
  );
};

export default App;
