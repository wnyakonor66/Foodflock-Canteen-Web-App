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
        link: '/profile'

    },
    {
        title: "Products",
        icon: <ProductionQuantityLimitsIcon/>,
        link: '/product'

    },
    {
        title: "Orders",
        icon: <ShopIcon/>,
        link: '/order'

    },
    {
        title: "Settings and Preferences",
        icon: <SettingsIcon/>,
        link: '/settings'

    },
    {
        title: "Support and Help",
        icon: <HelpIcon/>,
        link: '/support'

    },

]

 
