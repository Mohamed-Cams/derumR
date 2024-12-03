import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Acceuil from './components/Pages/Acceuil';
import Depot from "./components/Pages/Depot";
import Login from "./components/Pages/Login"
import Register from './components/Pages/Register';
import Retrait from "./components/Pages/Retrait";
import Transaction from "./components/Pages/Transaction"
import Transfert from './components/Pages/Transfert';
import Profile from "./components/Pages/Profile";
import Dashboard from "./components/Pages/Dashboard"

function App() {
  return (
    <Router>
      <nav>
      <Link to="/">Home</Link> | <Link to="/acceuil">Acceuil</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/depot">Depot</Link><Link to="/login">Login</Link> | <Link to="/profile">Profile</Link> | <Link to="/register">Register</Link> | <Link to="/retrait">Retrait</Link> | <Link to="/transaction">Transaction</Link> | <Link to="/transfert">Transfert</Link> |
      </nav>
      <Routes>

      <Route  path="/acceuil" element={<Acceuil />} />
      <Route  path="/dashboard" element={<Dashboard />} />
      <Route  path="/depot" element={<Depot />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/profile" element={<Profile />} />
      <Route  path="/register" element={<Register />} />
      <Route  path="/retrait" element={<Retrait />} />
      <Route  path="/transaction" element={<Transaction />} />
      <Route  path="/transfert" element={<Transfert />} />
      <Route path="*" element={<h1>404: Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
