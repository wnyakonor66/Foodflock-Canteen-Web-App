import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShopIcon from '@mui/icons-material/Shop';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

export const SideBarData = [
    {
        title: "Profile",
        icon: <PersonIcon/>,
        link: '/vendorsPage/profile'

    },
    {
        title: "Products",
        icon: <ProductionQuantityLimitsIcon/>,
        link: '/vendorsPage/product'
 
    },
    {
        title: "Orders",
        icon: <ShopIcon/>,
        link: '/vendorsPage/order'

    },
    {
        title: "Settings and Preferences",
        icon: <SettingsIcon/>,
        link: '/vendorsPage/settings'

    },
    {
        title: "Support and Help",
        icon: <HelpIcon/>,
        link: '/vendorsPage/support'

    },

]

 
