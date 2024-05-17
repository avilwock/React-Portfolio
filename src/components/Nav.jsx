//imports the router link to allow for link usage
import { Link } from 'react-router-dom';
import '../App.css';

//cretes the nav component with the styling. 
export default function Nav() {
  return (
    <nav style={{ 
      height: '100px', 
      //fixes the position to the top of the screen
      position: 'absolute',
      padding: '5px',
      top: 0,
      width: '100%',
      backgroundColor: 'indigo',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',  
    }}>
      <h1 style={{color: 'white', fontSize: '65px', margin: 0, padding: 0, flex: 1, textAlign: 'center'}}>Amanda&apos;s Portfolio</h1>
      <ul style={{ 
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '0px',
        margin: '5px',
        alignSelf: 'flex-start'
      }}>
        <li style={{ padding: '5px' }}>
          <Link className="nav-link text-light" style={{ color: 'white' }} to="/">Home</Link>
        </li>
        <li style={{ padding: '5px' }}>
          <Link className="nav-link text-light" style={{ color: 'white' }} to="/about">About Me</Link>
        </li>
        <li style={{ padding: '5px' }}>
        <Link className="nav-link text-light" style={{ color: 'white' }} to="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}
