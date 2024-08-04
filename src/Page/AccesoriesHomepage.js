import React from 'react';
import './AccesoriesHomepage.css';

// Unified Card component
const Card = ({ image, url, onClick }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank'); // Open URL in a new tab if provided
    } else {
      onClick(); // Call the onClick function if no URL
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={image.src} alt={image.title} />
      <div className="card-title">{image.title}</div>
    </div>
  );
};

const AccesoriesHomepage = () => {
  const images = [
    { id: '1', src: 'assets/royal.jpeg', title: 'RoyalEnfield Helmets', url: 'https://example.com/royal' },
    { id: '2', src: 'assets/agv.jpeg', title: 'AGV Helmets', url: 'https://example.com/agv' },
    { id: '3', src: 'assets/Studds-1.jpeg', title: 'STUDDS Helmets', url: 'https://example.com/studds' },
    { id: '4', src: 'assets/Axor.jpeg', title: 'AXOR Helmets', url: 'http://localhost:3000/' },
    { id: '5', src: 'assets/smk white.jpg', title: 'SMK Helmets', url: 'https://example.com/smk' },
    { id: '6', src: 'assets/vega.jpeg', title: 'VEGA Helmets', url: 'https://example.com/vega' },
    { id: '7', src: 'assets/Jackets.jpeg', title: 'Riding Jackets', url: 'https://example.com/jackets' },
    { id: '8', src: 'assets/Gloves.jpeg', title: 'Riding Gloves', url: 'https://example.com/gloves' },
    { id: '9', src: 'assets/Boot.jpeg', title: 'Riding Boots', url: 'https://example.com/boots' },
  ];

  const handleCardClick = (id) => {
    console.log(`Clicked card with ID: ${id}`);
    // Add your desired functionality here
  };

  return (
    <div className="card-grid">
      {images.map((image) => (
        <Card
          key={image.id}
          image={image}
          onClick={() => handleCardClick(image.id)} // Handle click for cards without URL
          url={image.url} // Pass URL for cards that should open a link
        />
      ))}
    </div>
  );
};

export default AccesoriesHomepage;
