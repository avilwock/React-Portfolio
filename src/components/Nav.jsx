import { Link } from 'react-router-dom';

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
        <li style={{ padding: '5px' }}>
          <Link className="nav-link text-light" style={{ color: 'white' }} to="/">Home</Link>
        </li>
        <li style={{ padding: '5px' }}>
          <Link className="nav-link text-light" style={{ color: 'white' }} to="/profile">About Me</Link>
        </li>
      </ul>
    </nav>
  );
}
