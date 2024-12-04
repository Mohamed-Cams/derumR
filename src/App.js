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
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/acceuil">Acceuil</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/depot">Depot</Link> | <Link to="/login">Login</Link> | <Link to="/profile">Profile</Link> | <Link to="/register">Register</Link> | <Link to="/retrait">Retrait</Link> | <Link to="/transaction">Transaction</Link> | <Link to="/transfert">Transfert</Link> |
      </nav>
      <Routes>

        <Route path="/acceuil" element={<ProtectedRoute><Acceuil /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/depot" element={<ProtectedRoute><Depot /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/retrait" element={<ProtectedRoute><Retrait /></ProtectedRoute>} />
        <Route path="/transaction" element={<ProtectedRoute><Transaction /></ProtectedRoute>} />
        <Route path="/transfert" element={<ProtectedRoute><Transfert /></ProtectedRoute>} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
