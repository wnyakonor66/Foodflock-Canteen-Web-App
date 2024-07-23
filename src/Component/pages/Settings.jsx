import {React,useState} from 'react';
import '../styles/settings.css';
import { usePayment } from '../../ClientPage/PaymentContext';


const Settings = () => {
  const { setSelectedPaymentMethod } = usePayment();
  const [paymentMethods, setPaymentMethods] = useState({
    cash: false,
    creditCard: false,
    mobilePayment: false,
  });

  const handlePaymentMethodChange = (e) => {
    const { name, checked } = e.target;
    setPaymentMethods({ ...paymentMethods, [name]: checked });
    if (checked) {
      setSelectedPaymentMethod(name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [notifications, setNotifications] = useState({
    email: false,
    sms: false,
  });

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  return (
    <div className="Settings-page">
      <h2 className="settings-header">Settings and Preferences</h2>
      <div className="settings-section">
        <h3>Payment Methods</h3>
        <div className="settings-item">
          <label htmlFor="cash">
            <input type="checkbox" name="cash" checked={paymentMethods.cash} onChange={handlePaymentMethodChange} />
            Cash
          </label>
        </div>
        <div className="settings-item">
          <label htmlFor="creditCard">
            <input type="checkbox" name="creditCard" checked={paymentMethods.creditCard} onChange={handlePaymentMethodChange} />
            Credit Card
          </label>
        </div>
        <div className="settings-item">
          <label htmlFor="mobilePayment">
            <input type="checkbox" name="mobilePayment" checked={paymentMethods.mobilePayment} onChange={handlePaymentMethodChange} />
            Mobile Payment
          </label>
        </div>
      </div>
      <div className="settings-section">
        <h3>Notifications</h3>
        <div className="settings-item">
          <label htmlFor="email">
            <input type="checkbox" name="email" checked={notifications.email} onChange={handleNotificationChange} />
            Email
          </label>
        </div>
        <div className="settings-item">
          <label htmlFor="sms">
            <input type="checkbox" name="sms" checked={notifications.sms} onChange={handleNotificationChange} />
            SMS
          </label>
        </div>
      </div>
      <button className="save-button" onClick={handleSubmit}>Save Settings</button>
    </div>
  );
};

export default Settings;
