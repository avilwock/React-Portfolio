import './index.css';
import PortfolioItem from './components/PortfolioItem';
import './App.css'

function App() {
  return (
    <>
      <main className="mx-3">
        <div id = "portfolio-projects">
          <PortfolioItem 
          image="src\images\CodeQuiz Img.png"
          title="JavaScript Quiz" 
          description="This project is designed to test one's knowlege of JavaScript in a multiple choice test format" 
          link="https://github.com/avilwock/Code-Quiz"
          className="portfolio-item"
          />

        </div>
      </main>
    </>
  );
}

export default App;
