import React from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShopIcon from '@mui/icons-material/Shop';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

export const SideBarData = [
    {
        title: "Profile",
        icon: <PersonIcon/>,
        Link: '/profile'

    },
    {
        title: "Product",
        icon: <ProductionQuantityLimitsIcon/>,
        Link: '/product'

    },
    {
        title: "Order",
        icon: <ShopIcon/>,
        Link: '/order'

    },
    {
        title: "Settings and Preferences",
        icon: <SettingsIcon/>,
        Link: '/settings'

    },
    {
        title: "Support and Help",
        icon: <HelpIcon/>,
        Link: '/support'

    },

]

 
