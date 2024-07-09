import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import './vendorform.css';


const VendorForm = () => {
    const [phone , setPhone] = useState('');
    const [hasSocialMedia, setHasSocialMedia] = useState(false);
    const handleSubmit =(event)=> {
      event.preventDefault();
    };

  return (
    <div className='vendorScreen'>
        <h2>Vendors Registration Form</h2>
        <form onSubmit={handleSubmit}>
            <div className='inputGroup'>
              <h3>Business Information</h3>
                <label htmlFor='businessName'>Business Name:</label>
                <input 
                    type='text'
                    placeholder='Enter your Business Name'
                    id='businessName'
                    autoComplete='off'
                    required
                 />
                <label htmlFor='mealType'>Meal Type:
                  <select name='mealType' required>
                    <option value=''>Select Meal Type</option>
                    <option value='Breakfast'>Breakfast</option>
                    <option value='Lunch'>Lunch</option>
                    <option value='Supper'>Supper</option>
                  </select>
                </label>
                <label htmlFor='operatingHours'>Operating Hours:</label>
                <input 
                  type='text'
                  id='operatingHours'
                  required
                />

                <h3>Contact Information</h3>
                <label htmlFor='contactPersonName'>Contact Person Name:</label>
                <input 
                  type='text'
                  id='contactPersonName'
                  required
                />
                <label htmlFor='contactPhoneNumber'>Contact Phone number:</label>
                <PhoneInput 
                  country={'gh'}
                  value={phone}
                  onChange={setPhone}
                  countryCodeEditable = {false}
                    inputProps={{
                      name: 'phone',
                      autoFocus: true,
                      required: true,
                    }}
                />
                <label htmlFor='email'>Contact Email</label>
                <input 
                  type='email'
                  id='email'
                  required               
                />
                <label htmlFor='businessAddress'>Business Address:</label>
                <input 
                  type='text'
                  id='businessAddress'
                  required                
                />
                <label htmlFor='city'>City</label>
                <input 
                  type='text'
                  id='city'
                  required
                />

                <h3>Business Details</h3>
                <label htmlFor='businessDescription'>Business Description:</label>
                <textarea name='businessDesciption' required></textarea>
                <label htmlFor='deliveryOptions'>Delivery Options:
                  <select name='deliveryOptions' required>
                    <option value=''>Do you accept delivery</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                  </select>
                </label>

                <h3>Social Media Handles</h3>
                <label htmlFor='socialMediaHandles'>
                  Do you have any social Media Handles?
                  <select name='hasSocialMedia' 
                    onChange={(e) => setHasSocialMedia(e.target.value==='Yes')} required
                  >
                    <option value=''>Select an option</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>

                  </select>
                </label>
                {
                  hasSocialMedia && (
                    <>
                      <label htmlFor='facebookUrl'>Facebook
                        <input type='url' name='facebookUrl' />
                      </label>
                        <label htmlFor='instagramHandle'>Instagram Handle:
                          <input type='text' name='instagramHandle' />
                        </label>
                          <label htmlFor='TwitterHandle'>Twitter Handle:
                            <input type='text' name='TwitterHandle' />
                          </label>
                    </>
                  )
                }

                <button type='submit'>Submit</button>
                          
            </div>
        </form>
    </div>
  )
}

export default VendorForm