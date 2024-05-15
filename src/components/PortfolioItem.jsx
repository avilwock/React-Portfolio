const PortfolioItem = ({ image, title, description, link, projectLink, isSpecial, comingSoon }) => {
    return (
        <div style={{ 
            width: isSpecial? '800px' : '400px',
            height: '350px',
            border: 'groove black 5px',
            margin: '50px',
            borderRadius: '20px',
            display: 'inline-block',
            textAlign: 'center',
            verticalAlign: 'top'
            
        }}>
            <img
                src={image}
                alt={title}
                style={{
                    width: '250px',
                    height: '200px',
                    borderRadius: '20px',
                    marginTop: '5px',
                }}
            />
            <h3 style={{ margin: '10px 0 0' }}>{title}</h3>
            <p>{comingSoon}</p>
            <p style={{ margin: '5px 0' }}>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', backgroundColor: 'black', color: 'blue' }}>View Repository</a><br></br>
            <a href={projectLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue'}}>View Project</a>
        </div>
    );
}

export default PortfolioItem;
