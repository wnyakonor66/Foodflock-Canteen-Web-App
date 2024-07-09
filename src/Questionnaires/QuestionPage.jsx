import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionPage = () => {
    const navigate = useNavigate();

    const handleChoice = (choice) => {
        if (choice === 'Vendor') {
            navigate('/vendorForms');
        } else {
            navigate('/VendorsPage');
        }
    };

    return (
        <div className='container d-flex flex-column justify-content-center align-items-center vh-100'>
            <form className='text-center p-4 border rounded'>
                <h2 className='mb-4'>Are you a vendor or a client?</h2>
                <div className='form-group'>
                    <button 
                        type='button' 
                        className='btn btn-primary me-2' 
                        onClick={() => handleChoice('Vendor')}
                    >
                        Vendor
                    </button>
                    <button 
                        type='button' 
                        className='btn btn-secondary ms-2' 
                        onClick={() => handleChoice('VendorsPage')}
                    >
                        Client
                    </button>
                </div>
            </form>
        </div>
    );
};

export default QuestionPage;
