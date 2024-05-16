import PortfolioItem from '../components/PortfolioItem';
import '../App.css';

function App() {
  return (
    <>
      <h1 style={{ marginTop: '150px', display: 'flex', justifyContent: 'center', fontSize: '65px' }}>My Projects</h1>
      <main className="mx-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px' }}>
        <div id="portfolio-projects" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PortfolioItem />
        </div>
      </main>
    </>
  );
}

export default App;
