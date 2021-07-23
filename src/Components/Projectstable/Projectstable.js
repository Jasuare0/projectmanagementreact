import React from 'react';
import "./Projectstable.css"

function Projectstable(props) {

    return (

        <table className="TableProjectList">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Project</th>
                    <th>Country</th>
                    <th>Brand</th>
                    <th>Status</th>
                    <th>% Advance</th>
                    <th>Initial Date</th>
                    <th>Launching</th>
                    <th>Gantt</th>
                    <th>Financial</th>
                    <th>Team</th>

                </tr>
            </thead>

            <tbody>

                {props.props.projectData.map( (project,index) => {
                    return(

                        <tr key={index}>
                            <td>{project.id}</td>
                            <td>{project.nameProject}</td>
                            <td>{project.country}</td>
                            <td>{project.brand}</td>
                            <td>{project.status}</td>
                            <td>{project.advance}</td>
                            <td>{project.initialDate}</td>
                            <td>{project.LaunchingDate}</td>
                            <td>
                                <img src="/Images/gantt.jpg" className="imageIconGantt"  alt="imageIconGantt" />
                            </td>
                            <td>
                                <img src="/Images/finance.jpg" className="imageIconFinance"  alt="imageIconGantt" />
                            </td>
                            <td>
                                <img src="/Images/team.jpg" className="imageIconTeam"  alt="imageIconGantt" />
                            </td>
                        
                        </tr>


                    )
                })}

            </tbody>

        </table>

    )

}

export default Projectstable;