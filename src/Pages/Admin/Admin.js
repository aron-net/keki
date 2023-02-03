import { BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from '../../Components/AdminComponents/Dashboard/Dashboard';

const Admin = () => (
  <BrowserRouter>
    <Header />
    <main className="content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default Admin;
