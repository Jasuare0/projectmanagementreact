import React from 'react';
import "./Projectstable.css"

function Projectstable() {
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
                <tr>
                    <td>1</td>
                    <td>Project 1</td>
                    <td>Argentina</td>
                    <td>Pepsi</td>
                    <td>Open</td>
                    <td>70%</td>
                    <td>Oct/21</td>
                    <td>Oct/21</td>
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


                <tr>
                    <td>2</td>
                    <td>Project 2</td>
                    <td>Argentina</td>
                    <td>Pepsi</td>
                    <td>Open</td>
                    <td>70%</td>
                    <td>Oct/21</td>
                    <td>Oct/21</td>
                    <td>
                        <img src="/Images/gantt.jpg" className="imageIconGantt" alt="imageIconGantt" />
                    </td>
                    <td>
                        <img src="/Images/finance.jpg" className="imageIconFinance"  alt="imageIconGantt" />
                    </td>
                    <td>
                        <img src="/Images/team.jpg" className="imageIconTeam"  alt="imageIconGantt" />
                    </td>
                    
                </tr>

                <tr>
                    <td>3</td>
                    <td>Project 3</td>
                    <td>Argentina</td>
                    <td>Pepsi</td>
                    <td>Open</td>
                    <td>70%</td>
                    <td>Oct/21</td>
                    <td>Oct/21</td>
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


            </tbody>

        </table>

    )

}

export default Projectstable;