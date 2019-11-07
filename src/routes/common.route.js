import React from 'react';
import IncludedHome from '../modules/home/home.route';
import IncludedLogin from '../modules/oauth/oauth.route';
import IncludedPreLoader from '../components/PreLoader/PreLoader';

const CombineRoutes = (props) => {
    const oauth = false;
    switch (oauth) {
        case 'cookes': 
            return <IncludedPreLoader />
        case true: 
            return <IncludedHome {...props} />;
        default: 
            return <IncludedLogin {...props} />
    }
}

export default CombineRoutes;