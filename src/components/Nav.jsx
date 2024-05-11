import { Link, Route, Routes } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage.jsx'; // Import ProfilePage component
import HomePage from '../pages/HomePage.jsx';

export default function Nav() {
  return (
    <nav style={{ 
      height: '75px', 
      position: 'fixed',
      padding: '5px',
      top: 0,
      width: '100%',
      backgroundColor: 'blue',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <ul style={{ 
        listStyleType: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 0
      }}>
        {[
          { to: '/', label: 'Home' },
          { to: '/ProfilePage', label: 'About Me' }
        ].map((item, index) => (
          <li key={index} style={{ padding: '5px' }}>
            <Link 
              className="nav-link text-light" 
              style={{ color: 'white' }} 
              to={item.to}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </nav>
  );
}
