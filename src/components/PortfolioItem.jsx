import { Link } from 'react-router-dom';
import PortfolioData from '../../db/db.json';
import '../App.css';

const PortfolioItem = () => {
    return (
        <div style={{ marginBottom: '50px', textAlign: 'center'}}>
            {PortfolioData.map((item, index) => (
                <div key={index} style={{ 
                    width: item.isSpecial ? '800px' : '400px',
                    height: '350px',
                    border: 'groove black 5px',
                    margin: '20px 30px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    textAlign: 'center',
                    verticalAlign: 'top',
                    opacity: item.isComingSoon ? 0.5 : 1, // Apply opacity based on isComingSoon
                        pointerEvents: item.isComingSoon ? 'none' : 'auto' // Disable pointer events if coming soon
                }}>
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{
                            width: item.isSpecial ? '500px' : '250px',
                            height:'200px',
                            borderRadius: '20px',
                            marginTop: '5px',
                        }}
                    />
                    <h3 style={{ margin: '10px 0 0' }}>{item.title}</h3>
                    <p style={{ margin: '5px 0' }}>{item.description}</p>
                    {item.link &&
                    <Link to={item.link} style={{ textDecoration: 'none', backgroundColor: 'black', color: 'blue' }}>View Repository</Link>}<br></br>
                    {item.projectLink &&
                    <Link to={item.projectLink} style={{ textDecoration: 'none', color: 'blue'}}>View Project</Link>}
                </div>
            ))}
        </div>
    );
}

export default PortfolioItem;
