//imports the link from the react-router-dom
import { Link } from 'react-router-dom';
//imports portfolio data from the db.json file
import PortfolioData from '../../db/db.json';
//imports app.css
import '../App.css';

const PortfolioItem = () => {
    return (
        <div style={{ marginBottom: '50px', textAlign: 'center'}}>
            {/*pulls in portfolio data and maps over it. It assigns a unique key of index and sets the item prop*/}
            {PortfolioData.map((item, index) => (
                <div key={index} style={{ 
                    //if the item is labeled as isSpecial, it doubles the length of the box
                    width: item.isSpecial ? '800px' : '400px',
                    height: '400px',
                    //gives a groove border of indigo
                    border: 'groove indigo 10px',
                    margin: '20px 30px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    textAlign: 'center',
                    verticalAlign: 'top',
                    //if the item isComingSoon, it gives it 50% opacity
                    opacity: item.isComingSoon ? 0.5 : 1, // Apply opacity based on isComingSoon
                    //if the item is coming soon, the click feature is disabled
                    pointerEvents: item.isComingSoon ? 'none' : 'auto' // Disable pointer events if coming soon
                }}>
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{
                            //sets the item so that if it's special, the image is twice the length of not
                            width: item.isSpecial ? '500px' : '250px',
                            height:'200px',
                            borderRadius: '20px',
                            marginTop: '5px',
                        }}
                    />
                    <h3 style={{ margin: '10px 0 0' }}>{item.title}</h3>
                    <p style={{ margin: '5px 0' }}>{item.description}</p>
                    {item.link &&
                    <button style={{ textDecoration: 'none', backgroundColor: '#4B0082', color: 'white', border: 'none', borderRadius: '5px', padding: '10px', margin: '5px' }}>
                        <Link to={item.link} style={{ color: 'silver', textDecoration: 'none' }}>View Repository</Link>
                    </button>}<br></br>
                    {item.projectLink &&
                    <button style={{ textDecoration: 'none', backgroundColor: '#4B0082', color: 'white', border: 'none', borderRadius: '5px', padding: '10px', margin: '5px' }}>
                        <Link to={item.projectLink} style={{ color: 'silver', textDecoration: 'none' }}>View Project</Link>
                    </button>}
                </div>
            ))}
        </div>
    );
}

export default PortfolioItem;
