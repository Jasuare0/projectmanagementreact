import React from 'react';
import './FilterStatus.css'

function FilterStatus(props) {
    return (

        <div className="ContainerStatus">
            <label className="labelStatus">Status</label>
            <select  className="form-select">
                <option>All</option>
                {props.props.props.statusProject.map((status,item) => {
                    return (
                        <option key={item}>{status}</option>
                    )
                })}

            </select>

        </div>

    )

}

export default FilterStatus;