// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './components/Login';
import ContactList from './components/ContactList';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/contacts" /> : <Login />} />
        <Route path="/contacts" element={isAuthenticated ? <ContactList /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/contacts" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default App;
