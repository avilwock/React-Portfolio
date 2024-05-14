import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Nav from './components/Nav.jsx';
import App from './App.jsx';
import Home from './pages/HomePage.jsx';
import About from './pages/ProfilePage.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <App />
  </Router>
);
