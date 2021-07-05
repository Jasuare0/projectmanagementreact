import React from 'react';
import './FilterStatus.css'

function FilterStatus() {
    return (

        <div className="ContainerStatus">
            <label className="labelStatus">Status</label>
            <select  class="form-select">
                <option>All</option>
                <option>Evaluating</option>
                <option selected>Open</option>
                <option>Finished</option>
                <option>On Hold</option>
            </select>

        </div>

    )

}

export default FilterStatus;