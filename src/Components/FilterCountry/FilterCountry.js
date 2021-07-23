import React from 'react';
import './FilterCountry.css'

function FilterCountry(props) {
    return (

        <div className="ContainerFilterCountry">
            <label className="labelCountry">Country</label>
            <select  className="form-select">
                <option>All</option>
                {props.props.props.countries.map((country,index) => {
                    return(
                        <option key={index}>{country}</option>

                    )
                })}

            </select>

        </div>

    )

}

export default FilterCountry;