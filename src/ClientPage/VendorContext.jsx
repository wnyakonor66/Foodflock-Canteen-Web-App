import React, { createContext, useState } from 'react';

export const VendorContext = createContext(); 

export const VendorProvider = ({ children }) => {
    const [vendors, setVendors] = useState([
        {
            name: "By His Grace",
            hours: "9 AM - 9 PM",
            address: "Frontline Court, Ayeduase, Ghana",
            description: "Best of the best in town. We offer a variety of delicious meals made from fresh ingredients.",
            phone: "+233205678654",
            email: "byhisgrace@business1.com",
            socialMedia: {
                facebook: "https://facebook.com/business1",
                instagram: "https://instagram.com/business1",
                twitter: "https://twitter.com/business1"
            }
        },
        {
            name: "Grace Foods",
            hours: "8 AM - 8 PM",
            address: "Second Street, Kumasi, Ghana",
            description: "Delicious home-cooked meals with a touch of grace.",
            phone: "+233201234567",
            email: "gracefoods@business2.com",
            socialMedia: {
                facebook: "https://facebook.com/business2",
                instagram: "https://instagram.com/business2",
                twitter: "https://twitter.com/business2"
            }
        },
        // Add 3 more vendor objects here...
        {
            name: "Tasty Treats",
            hours: "10 AM - 10 PM",
            address: "Market Circle, Takoradi, Ghana",
            description: "A place for tasty treats and delightful meals.",
            phone: "+233207654321",
            email: "tastytreats@business3.com",
            socialMedia: {
                facebook: "https://facebook.com/business3",
                instagram: "https://instagram.com/business3",
                twitter: "https://twitter.com/business3"
            }
        },
        {
            name: "Daily Delights",
            hours: "7 AM - 7 PM",
            address: "Main Street, Accra, Ghana",
            description: "Daily delights to brighten up your day.",
            phone: "+233209876543",
            email: "dailydelights@business4.com",
            socialMedia: {
                facebook: "https://facebook.com/business4",
                instagram: "https://instagram.com/business4",
                twitter: "https://twitter.com/business4"
            }
        },
        {
            name: "Yummy Bites",
            hours: "6 AM - 6 PM",
            address: "Beach Road, Cape Coast, Ghana",
            description: "Yummy bites for all your cravings.",
            phone: "+233208765432",
            email: "yummybites@business5.com",
            socialMedia: {
                facebook: "https://facebook.com/business5",
                instagram: "https://instagram.com/business5",
                twitter: "https://twitter.com/business5"
            }
        }
    ]);

    const updateVendor = (index, newData) => {
        const updatedVendors = vendors.map((vendor, i) => 
            i === index ? { ...vendor, ...newData } : vendor
        );
        setVendors(updatedVendors);
    };

    return (
        <VendorContext.Provider value={{ vendors, updateVendor }}>
            {children}
        </VendorContext.Provider>
    );
};
