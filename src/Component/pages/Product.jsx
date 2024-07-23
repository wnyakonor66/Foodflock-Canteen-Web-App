import React, { useContext, useState } from 'react';
import '../styles/product.css';
import { ProductContext } from '../../ClientPage/ProductContext';


const Product = () => {
  const { addProduct, products } = useContext(ProductContext);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [mealType, setMealType] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      name: productName,
      description: productDescription,
      quantity: productQuantity,
      mealType,
      image: productImage,
      price: productPrice,
    };

    addProduct(newProduct);

    setProductName('');
    setProductDescription('');
    setProductQuantity('');
    setMealType('');
    setProductImage(null);
    setProductPrice('');
  };

  const handleImageUpload = (e) => {
    setProductImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="product-form-container">
      <div className="header-container">
        <h2>Add Product</h2>
      </div>
      <div className="product-form-card">
        <div className="product-field">
          <label>Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="product-field">
          <label>Product Description</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </div>

        <div className="product-field">
          <label>Quantity</label>
          <input
            type="number"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            required
          />
        </div>

        <div className="product-field">
          <label>Meal Type</label>
          <input
            type="text"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            required
          />
        </div>

        <div className="product-field">
          <label>Product Image</label>
          <input
            type="file"
            onChange={handleImageUpload}
            required
          />
        </div>

        <div className="product-field">
          <label>Price</label>
          <input
            type="number"
            value={productPrice}
            placeholder="Ghc"
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>

        <button className="add-product-button" onClick={handleAddProduct}>Add Product</button>
      </div>

      <div className="header-container">
        <h3>Product Listing</h3>
      </div>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            {product.image && <img src={product.image} alt={product.name} />}
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Meal Type: {product.mealType}</p>
            <p>Price: Ghc{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;