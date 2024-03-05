import React, { useState } from 'react';
import ButtonAppBar from '../navbar';
import './dashboard.css'

const Dashboard = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        { id: 1, name: 'Shoes', description: 'fusion of style and comfort', image: 'https://emedigital.co.uk/wp-content/uploads/2022/06/ortery-360-background-removal-natural-shadow-300x300-1.jpeg',  price: 200, rating: 4},
      {
          id:2,
          image: 'https://d25g9z9s77rn4i.cloudfront.net/uploads/product/478/1659165776_438440f2ee70124f6b2c.jpg',
          name: 'chain Set',
          description: 'Classic Jewelry Chain',
          price: 2000,
          rating: 4,
    },
    {
      id:3,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ML733_VW_34FR+watch-case-41-stainless-gold-s9_VW_34FR+watch-face-41-stainless-gold-s9_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507905569',
      name: 'Apple Watch',
      description: 'Stainless steel case',
      price: 1500,
      rating: 3.5,
    },
    {
        image: 'https://marscosmetics.in/cdn/shop/products/MARSEL02_6ff2d5e8-bfc0-4943-b647-28db5a3550a3_grande.jpg?v=1638453155',
        name: 'Eyeliner',
        description: 'Effortless Elegance Eyeliner',
        price: 150,
        rating: 3.5,
      },
      {
        image: 'data:image/jpeg;base64,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',
        name: 'Wooden Chair',
        description: 'Handcrafted Wooden Chair',
        price: 1500,
        rating: 3.5,
      }
    ];

    const handleClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="dashboard">
          <ButtonAppBar/>
            <div className="product-list">
                <h2>Product List</h2>
                <ul>
                    {products.map(product => (
                        <li key={product.id} onClick={() => handleClick(product)}>{product.name}</li>
                    ))}
                </ul>
            </div>
            <div className="product-details">
                {selectedProduct && (
                    <div>
                        <h2>{selectedProduct.name}</h2>
                        <p>{selectedProduct.description}</p>
                        <img className="product-image" src={selectedProduct.image} alt={selectedProduct.name} />
                        <p>Price:{selectedProduct.price}</p>
                        <p>Rating:{selectedProduct.rating}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
