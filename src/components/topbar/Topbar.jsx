import React from 'react'
import "./topbar.css"
// import {NotificationsNone} from "@material-ui/icons-materiaL";
// import {NotificationsNoneIcon} from "@mui/icons-material";
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">

                <div className="topLeft">
                    <span className="logo">MYSITE</span>
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer">
                        Kishore
                    </div>
                    <div className="topbarIconContainer">
                    <NotificationsNoneIcon />
                    </div>
                    <div className="topbarIconContainer">
                        <HelpOutlineIcon />
                    </div>
                </div>

            </div>
        </div>
    );
}
