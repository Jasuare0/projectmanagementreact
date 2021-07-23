import React from 'react';
import './FilterBrand.css'

function FilterBrand() {
    return (

        <div className="ContainerFilterBrand">
            <label className="labelBrand">Brand</label>
            <select  className="form-select">
                <option>All</option>
                <option>Brand 1</option>
                <option>Brand 2</option>
                <option>Brand 3</option>
                <option>Brand 4</option>
            </select>

        </div>

    )

}

export default FilterBrand;