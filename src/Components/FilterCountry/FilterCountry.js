import React from 'react';
import './FilterCountry.css'

function FilterCountry() {
    return (

        <div className="ContainerFilterCountry">
            <label className="labelCountry">Country</label>
            <select  className="form-select">
                <option>All</option>
                <option>Argentina</option>
                <option>Brasil</option>
                <option>Bolivia</option>
                <option>Chile</option>
                <option>Panama</option>
                <option>Paraguay</option>
                <option>Republica Dominicana</option>
                <option>Uruguay</option>
            </select>

        </div>

    )

}

export default FilterCountry;