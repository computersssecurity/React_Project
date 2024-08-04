import React, { Component } from 'react';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        title: "Royal Piston Enhanced Original Indoor Silencer",
        description: "Black Edition with Authentic Sound, Compatible with RE Hunter 350",
        price: 2999,
        originalPrice: 5999,
        discount: 50,
        ratings: 4.0,
        reviews: 2,
        emiOptions: 145,
        images: [
          "image1.jpg",
          "image2.jpg",
          "image3.jpg",
          "image4.jpg",
          "image5.jpg"
        ],
      },
      selectedImage: "image1.jpg"
    };
  }

  handleImageClick = (image) => {
    this.setState({ selectedImage: image });
  }

  render() {
    const { product, selectedImage } = this.state;

    return (
      <div className="product-detail">
        <div className="image-gallery">
          <img src={selectedImage} alt={product.title} className="main-image" />
          <div className="thumbnail-container">
            {product.images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Thumbnail ${index + 1}`} 
                className="thumbnail" 
                onClick={() => this.handleImageClick(image)} 
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>₹ {product.price} <span className="original-price">₹ {product.originalPrice}</span></h2>
          <p className="discount">-{product.discount}%</p>
          <div className="rating">
            <span>{product.ratings} ({product.reviews} ratings)</span>
          </div>
          <p>Inclusive of all taxes</p>
          <p>EMI starts at ₹ {product.emiOptions}. No Cost EMI available.</p>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    );
  }
}

export default ProductDetail;