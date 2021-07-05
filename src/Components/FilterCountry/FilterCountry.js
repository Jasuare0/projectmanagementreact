import React from 'react';
import './FilterCountry.css'

function FilterCountry() {
    return (

        <div class="ContainerFilterCountry">
            <label className="labelCountry">Country</label>
            <select  class="form-select">
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