// import { AcUnit } from '@mui/icons-material';
import React from 'react'
import "./sidebar.css"
// import {LineStyle} from '@mui/icons-material';

export default function Sidebar() {
    return (
        <div className="sidebar">   
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    {/* <h3 className="sidebarTitle"></h3> */}
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            Projects
                        </li>
                        <li className="sidebarListItem">
                            Organisation Profile
                        </li>
                        <li className="sidebarListItem active">
                            Access Control
                        </li>

                    </ul>
                </div>

                {/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            Home
                        </li>
                        <li className="sidebarListItem">
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            Sales
                        </li>

                    </ul>
                </div> */}
            </div>
        </div>
    )
}
