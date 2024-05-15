import './index.css';
import PortfolioItem from './components/PortfolioItem';
import './App.css'

function App() {
  return (
    <>
      <main className="mx-3" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px'}}>
        <div id = "portfolio-projects">
          <PortfolioItem 
          image="src\images\CodeQuiz Img.png"
          title="JavaScript Quiz" 
          description="This project is designed to test one's knowlege of JavaScript in a multiple choice test format" 
          link="https://github.com/avilwock/Code-Quiz"
          projectLink="https://avilwock.github.io/Code-Quiz/"
          />
          <PortfolioItem
          image="src\images\JATE.png"
          title="Text Editor"
          description="This project is designed to store data online and offline"
          link="https://github.com/avilwock/Text-Editor"
          projectLink="https://text-editor-pou8.onrender.com"
          />
           <PortfolioItem
          image="src\images\TechBlog.png"
          title="Tech Blog"
          description="a blog to talk about fun tech related facts"
          link="https://github.com/avilwock/Tech-Blog"
          projectLink="https://warm-sands-36519-225dbeb270ac.herokuapp.com/"
          />
           <PortfolioItem
          image="src\images\Work-Day-Scheduler"
          title="Work Day Scheduler"
          description="A place to fill out everything you need to accomplish during your workday"
          link="https://github.com/avilwock/Work-Day-Scheduler"
          projectLink="https://avilwock.github.io/Work-Day-Scheduler/"
          />
           <PortfolioItem
          image="src\images\README-Generator"
          title="README Generator"
          description="a series of prompts that you can answer to easily generate your own README"
          link="https://github.com/avilwock/README-Generator"
          />
          <PortfolioItem
          image="src\images\PageTurnerPlates.png"
          title="Page Turner Plates"
          description="an app used to find recipes, and books related to the ingredient searched"
          link="https://github.com/avilwock/Page-Turner-Plates"
          projectLink="https://avilwock.github.io/Page-Turner-Plates/"
          />
          <PortfolioItem
          image="src\images\Car-GO.png"
          title="Car-GO"
          description="a blog used to discuss issues related to cars"
          link="https://github.com/avilwock/Car-GO"
          projectLink="https://warm-headland-43159-c6c90b718fb4.herokuapp.com/"
          />
          <PortfolioItem
          image="src\images\GoalGalaxy.png"
          title="Goal Galaxy"
          comingSoon="Coming Soon"
          description="a goal planning activity tracker app"
          link="https://github.com/avilwock/Goal-Galaxy"
          isSpecial={true}
          />
        </div>
      </main>
    </>
  );
}

export default App;
