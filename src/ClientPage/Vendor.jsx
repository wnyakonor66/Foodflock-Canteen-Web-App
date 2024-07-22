import React, { useContext } from 'react';
import {VendorContext} from './VendorContext'; 


const Vendor = () => {
    const { vendor } = useContext(VendorContext);

    return (
        <div className="vendor-display-container p-5">
            <div className="vendor-overview mb-6">
                <h2 className="text-xl font-bold mb-2">Vendor Overview</h2>
                <p><strong>Business Name:</strong> {vendor.name}</p>
                <p><strong>Operating Hours:</strong> {vendor.hours}</p>
                <p><strong>Business Address:</strong> {vendor.address}</p>
            </div>
            <div className="vendor-description mb-6">
                <h2 className="text-xl font-bold mb-2">Vendor Description</h2>
                <p>{vendor.description}</p>
            </div>
            <div className="vendor-contact mb-6">
                <h2 className="text-xl font-bold mb-2">Vendor Contact Information</h2>
                <p><strong>Phone:</strong> {vendor.phone}</p>
                <p><strong>Email:</strong> <a href={`mailto:${vendor.email}`} className="text-blue-500">{vendor.email}</a></p>
                <p><strong>Facebook:</strong> <a href={vendor.socialMedia.facebook} className="text-blue-500" target="_blank" rel="noopener noreferrer">{vendor.socialMedia.facebook}</a></p>
                <p><strong>Instagram:</strong> <a href={vendor.socialMedia.instagram} className="text-blue-500" target="_blank" rel="noopener noreferrer">{vendor.socialMedia.instagram}</a></p>
                <p><strong>Twitter:</strong> <a href={vendor.socialMedia.twitter} className="text-blue-500" target="_blank" rel="noopener noreferrer">{vendor.socialMedia.twitter}</a></p>
            </div>
        </div>
    );
};

export default Vendor;
