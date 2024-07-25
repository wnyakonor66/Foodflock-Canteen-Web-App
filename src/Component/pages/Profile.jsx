import React, { useContext, useState, useEffect } from 'react';
import { VendorContext } from '../../ClientPage/VendorContext';


const Profile = () => {
    const { vendor, setVendor } = useContext(VendorContext);
    const [formData, setFormData] = useState(vendor);

    useEffect(() => {
        setFormData(vendor);
    }, [vendor]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setVendor(formData);
    };

    return (
        <div className="profile-container">
            <h2>Update Your Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label htmlFor="name">Business Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="hours">Operating Hours</label>
                    <input
                        type="text"
                        id="hours"
                        name="hours"
                        value={formData.hours}
                        onChange={handleChange}
                    />
                    <label htmlFor="address">Business Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <label htmlFor="description">Business Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="facebook">Facebook</label>
                    <input
                        type="text"
                        id="facebook"
                        name="facebook"
                        value={formData.socialMedia.facebook}
                        onChange={handleChange}
                    />
                    <label htmlFor="instagram">Instagram</label>
                    <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formData.socialMedia.instagram}
                        onChange={handleChange}
                    />
                    <label htmlFor="twitter">Twitter</label>
                    <input
                        type="text"
                        id="twitter"
                        name="twitter"
                        value={formData.socialMedia.twitter}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
