import React from 'react';
import Projectstable from '../Projectstable/Projectstable.js';
import "./Externalcontainer.css"
import Filters from '../Filters/Filters.js';

function Externalcontainer(props) {

    return (

        <div className="Externalcontainer">
    
            <Filters
                props={props}
            />
            <Projectstable 
                props={props}
            />

        </div>

    )

}

export default Externalcontainer;