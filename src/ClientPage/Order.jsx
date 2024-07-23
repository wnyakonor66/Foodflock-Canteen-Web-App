import React, { useState } from 'react';
import { usePayment } from './PaymentContext';

const OrderForm = ({ onSubmit }) => {
  const { selectedPaymentMethod } = usePayment();
  const [clientName, setClientName] = useState('');
  const [clientPhoneNumber, setClientPhoneNumber] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [location, setLocation] = useState('');
  const [products, setProducts] = useState([{ productName: '', quantity: 1, price: 0 }]);
  const [accompaniment, setAccompaniment] = useState('');

  const handleAddProduct = () => {
    setProducts([...products, { productName: '', quantity: 1, price: 0 }]);
  };

  const handleProductChange = (index, key, value) => {
    const newProducts = products.map((product, i) =>
      i === index ? { ...product, [key]: value } : product
    );
    setProducts(newProducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      clientName,
      clientPhoneNumber,
      clientEmail,
      deliveryAddress,
      location,
      products,
      paymentMethod: selectedPaymentMethod,
      accompaniment,
    };
    onSubmit(order);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-4 bg-white shadow-lg rounded-lg">
      <div className="col-span-2 sm:col-span-1">
        <h2 className="text-xl font-bold mb-4">Client Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            value={clientPhoneNumber}
            onChange={(e) => setClientPhoneNumber(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Delivery Address</label>
          <input
            type="text"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location (City)</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <h2 className="text-xl font-bold mb-4">Order Information</h2>
        {products.map((product, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              value={product.productName}
              onChange={(e) => handleProductChange(index, 'productName', e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-gray-700 mt-2">Quantity</label>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-gray-700 mt-2">Price (Ghc)</label>
            <input
              type="number"
              value={product.price}
              onChange={(e) => handleProductChange(index, 'price', e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddProduct}
          className="mb-4 p-2 bg-blue-500 text-white rounded-md"
        >
          Add Product
        </button>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <h2 className="text-xl font-bold mb-4">Payment Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Payment Method</label>
          <input
            type="text"
            value={selectedPaymentMethod}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <h2 className="text-xl font-bold mb-4">Accompaniment</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Special Instructions</label>
          <textarea
            value={accompaniment}
            onChange={(e) => setAccompaniment(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="4"
          />
        </div>
      </div>
      <div className="col-span-2">
        <button
          type="submit"
          className="w-full sm:w-auto p-2 bg-green-500 text-white rounded-md"
        >
          Submit Order
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
