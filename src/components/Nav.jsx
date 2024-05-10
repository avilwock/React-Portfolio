// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul>
        {[
          { to: '/', label: 'Home' },
          { to: '/profile', label: 'About Me' }
        ].map((item, index) => (
          <li key={index}>
            <Link className="nav-link text-light" to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
