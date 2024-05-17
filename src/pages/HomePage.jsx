//imports the portfolio item
import PortfolioItem from '../components/PortfolioItem';
//imports the app.css
import '../App.css';

//sets up the homepage function
function HomePage() {
  return (
    <>
      <h1 style={{ marginTop: '150px', display: 'flex', justifyContent: 'center', fontSize: '50px' }}>My Projects</h1>
      <main className="mx-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px' }}>
        <div id="portfolio-projects" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/*Calls in the portfolio item which is the mapped over data from the db.json*/}
          <PortfolioItem />
        </div>
      </main>
    </>
  );
}

export default HomePage;
