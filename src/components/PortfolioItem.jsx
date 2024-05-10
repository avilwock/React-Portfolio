import React from 'react'

const PortfolioItem = ({ image, title, description, link }) => {
    return (
        <div className = "portfolio-item">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferencer"> View Project</a>
        </div>
    )
}

export default PortfolioItem;