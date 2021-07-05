import React from 'react';
import Projectstable from '../Projectstable/Projectstable.js';
import "./Externalcontainer.css"
import Filters from '../Filters/Filters.js';

function Externalcontainer() {
    return (

        <div className="Externalcontainer">
    
            <Filters/>
            <Projectstable/>

        </div>

    )

}

export default Externalcontainer;