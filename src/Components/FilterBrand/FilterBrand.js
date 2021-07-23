import React from 'react';
import './FilterBrand.css'

function FilterBrand(props) {
    return (

        <div className="ContainerFilterBrand">
            <label className="labelBrand">Brand</label>
            <select  className="form-select">
                <option>All</option>
                {props.props.props.brands.map((brand,item) => {
                    return(
                        <option>{brand}</option>
                    )
                })}

            </select>

        </div>

    )

}

export default FilterBrand;