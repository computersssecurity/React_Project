import React from 'react';
import './Parts.css'; // Make sure to create this CSS file

function AccesoriesHomepage() {
  const images = [
    { src: 'assets/chrome Silencer GT.jpg', title: 'Exhaust' },
    { src: 'assets/Mirror bar.jpg', title: 'Mirror Bar' },
    { src: 'assets/Petroltank.jpeg', title: 'Petrol Tank' },
    { src: 'assets/Chain lube.jpg', title: 'Chain Lube' },
    { src: 'assets/Chain sproket.jpg', title: 'Chain Sproket' },
    { src: 'assets/Head light.jpg', title: 'Head Light' },
    { src: 'assets/Engine.jpg', title: 'Engine Spares' },
    { src: 'assets/Brake.jpg', title: 'Brake ' },
    { src: 'assets/seat.jpg', title: 'Seat' },
  ];

  const handleCardClick = (index) => {
    console.log(`Clicked card ${index + 1}`);
    // Add your desired functionality here
  };

  return (
    <div className="card-grid">
      {images.map((image, index) => (
        <div
          className="card"
          key={index}
          onClick={() => handleCardClick(index)}
        >
          <img src={image.src} alt={`Card${index + 1}`} />
          <div className="card-title">{image.title}</div>
        </div>
      ))}
    </div>
  );
}

export default AccesoriesHomepage;
