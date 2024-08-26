import React from 'react';
import '../styles/support.css';
import ChatBot from '../../ChatBot';

const Support = () => {
  return (
    <div class="support-help">
        <h2 className='support-header'>Support and Help</h2>
        <div class="support-options">
            <div class="option">
             <h3>FAQs</h3>
            <p>Find answers to common questions.</p>
            <a href="/faqs">View FAQs</a>
        </div>
        <div class="option">
            <h3>Contact Support</h3>
            <p>Get in touch with our support team.</p>
            <a href="/contact">Contact Us</a>
        </div>
        <div class="option">
            <h3>Live Chat</h3>
            <p>Chat with us in real-time.</p>
            <a href="/chat">Start Chat</a>
        </div>
        <div class="option">
            <h3>Help Center</h3>
            <p>Browse articles and guides.</p>
            <a href="/help">Visit Help Center</a>
        </div>
        <div class="option">
            <h3>Submit a Ticket</h3>
            <p>Submit a support ticket.</p>
            <a href="/ticket">Submit Ticket</a>
        </div>
        <div class="option">
            <h3>Community Forum</h3>
            <p>Join our community discussions.</p>
            <a href="/forum">Visit Forum</a>
        </div>
        <div class="option">
            <h3>System Status</h3>
            <p>Check the current system status.</p>
            <a href="/status">View Status</a>
        </div>
  </div>
  <ChatBot/>
</div>

  );
}

export default Support;