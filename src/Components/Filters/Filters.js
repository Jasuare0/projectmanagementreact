import React from 'react';
import FilterCountry from '../FilterCountry/FilterCountry.js';
import FilterBrand from '../FilterBrand/FilterBrand.js';
import FilterStatus from '../FilterStatus/FilterStatus.js';
import './Filters.css';

function Filters() {
    return (

        <div className="internalContainerFilters">

            <FilterCountry/>
            <FilterBrand/>
            <FilterStatus/>
            <button type="submit" className="btn btn-primary filterButton">Filter</button>

        </div>

    )

}

export default Filters;