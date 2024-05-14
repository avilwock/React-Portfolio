import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Nav from './components/Nav.jsx';
import App from './App.jsx';
// import Home from './pages/HomePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Nav />
    <ProfilePage/>
    <App />
  </Router>
);
