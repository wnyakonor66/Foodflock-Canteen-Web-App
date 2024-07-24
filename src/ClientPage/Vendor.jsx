import React, { useContext, useState } from "react";
import { VendorContext } from "./VendorContext";
import SearchBar from "../Component/SearchBar";
import VendorCard from "../Component/VendorCard";

const Vendor = () => {
	const { vendors } = useContext(VendorContext);
	const [expandedIndex, setExpandedIndex] = useState(null);

	const toggleDetails = (index) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<div className="flex flex-col pt-3 px-3">
			{/* {vendors.map((vendor, index) => (
                <div key={index} className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-5">
                        <div className="vendor-card-content">
                            <h2 className="text-xl font-bold text-center mb-2">Vendor Overview</h2>
                            <p><strong>Business Name:</strong> {vendor.name}</p>
                            <p><strong>Operating Hours:</strong> {vendor.hours}</p>
                            <p><strong>Business Address:</strong> {vendor.address}</p>
                            <p 
                                className="text-right text-blue-500 cursor-pointer"
                                onClick={() => toggleDetails(index)}
                            >
                                {expandedIndex === index ? 'View Less' : '... View More'}
                            </p>
                        </div>
                        {expandedIndex === index && (
                            <div className="vendor-card-details mt-4">
                                <div className="vendor-description mb-4">
                                    <h2 className="text-xl font-bold mb-2">Vendor Description</h2>
                                    <p>{vendor.description}</p>
                                </div>
                                <div className="vendor-contact mb-4">
                                    <h2 className="text-xl font-bold mb-2">Vendor Contact Information</h2>
                                    <p><strong>Phone:</strong> {vendor.phone}</p>
                                    <p><strong>Email:</strong> <a href={`mailto:${vendor.email}`} className="text-blue-500">{vendor.email}</a></p>
                                    <p><strong>Facebook:</strong> <a href={vendor.socialMedia.facebook} className="text-blue-500" target="_blank" rel="noopener noreferrer">{vendor.socialMedia.facebook}</a></p>
                                    <p><strong>Instagram:</strong> <a href={vendor.socialMedia.instagram} className="text-blue-500" target="_blank" rel="noopener noreferrer">{vendor.socialMedia.instagram}</a></p>
                                    <p><strong>Twitter:</strong> <a href={vendor.socialMedia.twitter} className="text-blue-500" target="_blank" rel="noopener noreferrer">{vendor.socialMedia.twitter}</a></p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))} */}
			<SearchBar />
			<div className="mt-5 flex flex-row">
				<VendorCard />
				<VendorCard />
			</div>
		</div>
	);
};

export default Vendor;
