import React, { useEffect, useState } from 'react';
import '../styles/profile.css';
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from 'react-redux';
// import { updateBusiness } from "../thunk_action_creators/business.jsx";


const Profile = () => {
    const business = useSelector((state) => state.business.data);
    const dispatch = useDispatch();

    const [formData , setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        makes_delivery: "",
        description: "",
        hasSocialMedia: false,
        socialMedia: {
            facebookUrl: "",
            instagramHandle: "",
            TwitterHandle: "",
        }
        
    });


    useEffect(() => {
		if (business) {
			setFormData({
                name: business.name || "",
                phone: business.phone || "",
                email: business.email || "",
                makes_delivery: business.makes_delivery || "",
                description: business.description || "",
                hasSocialMedia: business.hasSocialMedia || "",
                socialMedia: {
                    facebookUrl: business.socialMedia?.facebookUrl || "",
                    instagramHandle: business.socialMedia?.instagramHandle || "",
                    TwitterHandle: business.socialMedia?.TwitterHandle || ""
                }
            })
		}
	}, [business]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      socialMedia: { ...formData.socialMedia, [name]: value }
    });
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(updateBusiness(formData));
  };


  return (
   <div className="profileScreen">
      <h2>Update Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <h3>Business Information</h3>
          <label htmlFor="name" className="required-asterisk">
            Business Name
          </label>
          <input
            type="text"
            placeholder="Enter your Business Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          
          <label htmlFor="phone" className="required-asterisk">
            Contact Phone number
          </label>
          <PhoneInput
            country={"gh"}
            value={formData.phone}
            onChange={(phone) => setFormData({ ...formData, phone })}
            countryCodeEditable={false}
            inputProps={{
              name: "phone",
              autoFocus: true,
              required: true,
              id: "phone"
            }}
          />
          <label htmlFor="email" className="required-asterisk">
            Contact Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <h3>Business Details</h3>
          <label htmlFor="description" className="required-asterisk">
            Business Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <label htmlFor="makes_delivery" className="required-asterisk">
            Delivery Options
          </label>
          <select
            name="makes_delivery"
            id="makes_delivery"
            value={formData.makes_delivery}
            onChange={handleChange}
            required
          >
            <option value="">Do you accept delivery</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <h3>Social Media Handles</h3>
          <label htmlFor="hasSocialMedia" className="required-asterisk">
            Do you have any social Media Handles?
          </label>
          <select
            name="hasSocialMedia"
            value={formData.hasSocialMedia ? "Yes" : "No"}
            onChange={(e) =>
              setFormData({ ...formData, hasSocialMedia: e.target.value === "Yes" })
            }
            required
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {formData.hasSocialMedia && (
            <>
              <label htmlFor="facebookUrl">
                Facebook
                <input
                  type="url"
                  name="facebookUrl"
                  value={formData.socialMedia.facebookUrl}
                  onChange={handleSocialMediaChange}
                />
              </label>
              <label htmlFor="instagramHandle">
                Instagram Handle:
                <input
                  type="text"
                  name="instagramHandle"
                  value={formData.socialMedia.instagramHandle}
                  onChange={handleSocialMediaChange}
                />
              </label>
              <label htmlFor="TwitterHandle">
                Twitter Handle:
                <input
                  type="text"
                  name="TwitterHandle"
                  value={formData.socialMedia.TwitterHandle}
                  onChange={handleSocialMediaChange}
                />
              </label>
            </>
          )}
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};


export default Profile;