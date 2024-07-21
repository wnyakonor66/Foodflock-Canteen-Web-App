import React, { useState } from 'react';
import "../styles/order.css";

const OrderMenu = () => {
  const [orders, setOrders] = useState([
    {
      id:1,
      customerName: 'Albert Guggisberg',
      status: 'Pending',
      location: 'Ayeduase,Frontline Court',
      meals:[{name:'Bread and Egg',quantity: 2,price: 16}]
    },
    {
      id:2,
      customerName: 'Angela Pierra',
      status: 'Approved',
      location: 'Gaza, Georgia Hostel',
      meals:[{name:'Indomie',quantity: 2,price: 50}]
    },
    {
      id:3,
      customerName: 'Obed Essel',
      status: 'Pending',
      location: 'Ayeduase, Victory Towers',
      meals:[{name:'Beans And Plantain',quantity: 4,price: 65}]
    },
    {
      id:4,
      customerName: 'Fred Arhin',
      status: 'Pending',
      location: 'Queens Hall Campus',
      meals:[{name:'Fried  Rice And Chicken',quantity: 1,price: 30}]
    },
  ]);
  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };
  return (
    <div className='orders-page'>
      <h2>Orders</h2>
      <div className='orders-list'>
        {orders.map((order)=>(
          <div key={order.id} className='order-card'>
            <h4>Customer: {order.customerName}</h4>
            <p>Location: {order.location}</p>
            <div>
              {order.meals.map((meal,index)=>(
                <div key={index} className='meal-info'>
                  <p>Meal: {meal.name}</p> 
                  <p>Quantity: {meal.quantity}</p>
                  <p>Price: Ghc{meal.price}</p>

                </div>
              ))}
            </div>
            <p>Status: {order.status}</p>
            {order.status === 'Pending' && (
              <button onClick={()=>handleStatusChange(order.id,'Approved')}>
                Approve Order
              </button>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderMenu;