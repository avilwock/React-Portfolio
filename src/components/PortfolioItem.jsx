const PortfolioItem = ({ image, title, description, link }) => {
    return (
        <div style={{marginTop: '200px', width: '400px',border: 'solid black 1px'}} className="portfolio-item">
            <img src={image} alt={title} style={{width: '300px'}} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default PortfolioItem;
