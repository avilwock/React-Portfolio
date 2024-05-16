import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav style={{ 
      height: '85px', 
      position: 'fixed',
      padding: '5px',
      top: 0,
      width: '100%',
      backgroundColor: 'blue',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',  
    }}>
      <p style={{color: 'white', fontSize: '45px', margin: 0, padding: 0, flex: 1, textAlign: 'center'}}>Amanda&apos;s Portfolio</p>
      <ul style={{ 
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '0px',
        margin: '5px',
        alignSelf: 'flex-start', // Align the links to the left
      }}>
        <li style={{ padding: '5px' }}>
          <Link className="nav-link text-light" style={{ color: 'white' }} to="/">Home</Link>
        </li>
        <li style={{ padding: '5px' }}>
          <Link className="nav-link text-light" style={{ color: 'white' }} to="/about">About Me</Link>
        </li>
      </ul>
    </nav>
  );
}
