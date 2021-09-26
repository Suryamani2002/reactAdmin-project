import React from 'react'
import "./home.css"
import RefreshIcon from '@mui/icons-material/Refresh';
import Middle from './part/Middle';
// import EditIcon from '@mui/icons-material/Edit';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Home() {
    return (
        <div className="home">
            <div className="upperSide">

                <div className="right">
                    <div className="items active">
                        Permissions
                    </div>
                    <div className="items">
                        Approval Matrix
                    </div>
                </div>

                <div className="left">
                    Last synced 15 mins ago  <RefreshIcon className="refresh"> </RefreshIcon>
                </div>


            </div>

            <div className="addItem">
                <div className="addRole">
                    <button className="bttn"><span> + </span>Add Item  </button>  <ModeEditOutlineOutlinedIcon className="edit" />   <DeleteOutlineOutlinedIcon className="delete" />

                </div>
            </div>

            <div>
                <Middle />
            </div>
            
        </div>
    )
}

export default Home
