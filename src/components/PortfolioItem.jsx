import { Link } from 'react-router-dom';
import PortfolioData from '../../db/db.json';

const PortfolioItem = () => {
    return (
        <div id="portfolio-projects" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {PortfolioData.map(item => (
                <div key={item.id} style={{ 
                    width: item.isSpecial ? '800px' : '400px',
                    height: '350px',
                    border: 'groove black 5px',
                    margin: '20px 30px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    textAlign: 'center',
                    verticalAlign: 'top'
                }}>
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{
                            width: '250px',
                            height: '200px',
                            borderRadius: '20px',
                            marginTop: '5px',
                        }}
                    />
                    <h3 style={{ margin: '10px 0 0' }}>{item.title}</h3>
                    <p style={{ margin: '5px 0' }}>{item.description}</p>
                    <Link to={item.link} style={{ textDecoration: 'none', backgroundColor: 'black', color: 'blue' }}>View Repository</Link><br></br>
                    <Link to={item.projectLink} style={{ textDecoration: 'none', color: 'blue'}}>View Project</Link>
                </div>
            ))}
        </div>
    );
}

export default PortfolioItem;
