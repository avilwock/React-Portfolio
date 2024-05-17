// Footer.js

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'indigo', color: 'white', textAlign: 'center', width: '100%', padding: '4px', position: 'relative', marginTop: 'calc(100vh - 300px)', bottom: '0px' }}>
      <p>Made with care by Amanda Vilwock</p>
      <ul style={{ padding: '0px', margin: '0px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', listStyleType: 'none' }}>
       <li>
       <a className="nav-link text-light" style={{ color: 'white', marginRight: '5px' }} href="https://github.com/avilwock" target="_blank" rel="noopener noreferrer">GitHub</a>
       </li>
       <li>
       <a className="nav-link text-light" style={{ color: 'white', marginLeft: '5px' }} href="https://www.linkedin.com/in/amanda-vilwock-b569a9300/" target="_blank" rel="noopener noreferrer">Linked In</a>
       </li>
      </ul>

    </footer>
  );
}
