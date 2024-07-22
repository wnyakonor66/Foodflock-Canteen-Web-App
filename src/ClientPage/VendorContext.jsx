import React, { createContext, useEffect, useState } from 'react';

export const VendorContext = createContext() 
  
export const VendorProvider = ({children})=>{
    const[vendor, setVendor] = useState({
         name: "By His Grace",
        hours: "9 AM - 9 PM",
        address: "Frontline Court,Ayeduase, Ghana",
        description: "Best of the best in town. We offer a variety of delicious meals made from fresh ingredients.",
        phone: "+233205678654",
        email: "byhisgrace@business1.com",
        facebook: "https://facebook.com/business1",
        instagram: "https://instagram.com/business1"
        
    });

    const updateVendor = (newData)=>{
        setVendor({...vendor,...newData});
    };

    return (
        <VendorContext.Provider value={{vendor,updateVendor}}>
            {children}
        </VendorContext.Provider>
    );
};