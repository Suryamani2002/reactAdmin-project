import React from 'react'
import './user.css'

// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


import RefreshIcon from '@mui/icons-material/Refresh';



function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: 'All Access',
                customerId: 'View items in access',
                amount: 3,
            },
            {
                date: 'Restricted Acccess',
                customerId: 'Edit Item in Access',
                amount: 1,
            },
        ],

    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            {/* <Typography variant="h6" gutterBottom component="div">
                                Acess Control
                            </Typography> */}
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <div className="outSide"> Access Control</div>
                                            <div className="inSide">
                                                <span className="divOne">< CheckBoxOutlineBlankOutlinedIcon className="icons" sx={{ fontSize: 15 }} /> All Access </span><br /> <br />
                                                <span className="divOne"> < CheckBoxOutlineBlankOutlinedIcon className="icons" sx={{ fontSize: 15 }} /> Restricted Access </span>
                                            </div>

                                        </TableCell>
                                        <TableCell>
                                            <div>Permissons</div>
                                            <div className="inSide">
                                                <span> < CheckBoxOutlineBlankOutlinedIcon className="icons" sx={{ fontSize: 15 }} /> View Item in Access</span> <br />
                                                <span> < CheckBoxOutlineBlankOutlinedIcon  className="icons" sx={{ fontSize: 15 }}/>Edit Item i Access </span> <br />
                                                <span> < CheckBoxOutlineBlankOutlinedIcon  className="icons" sx={{ fontSize: 15 }}/>Create Items in Access </span>  <br />
                                                <span> < CheckBoxOutlineBlankOutlinedIcon  className="icons" sx={{ fontSize: 15 }}/>Delete Item in Access </span>
                                            </div>


                                        </TableCell>
                                        {/* <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell> */}
                                    </TableRow>
                                </TableHead>



                                {/* <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>


                                            
                                            {/* <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell> */}
                                {/* </TableRow> */}
                                {/* ))} */}
                                {/* </TableBody> */}




                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

const rows = [
    createData('Budget', 'All Access', 'view create edit delete', '1 min ago',< ToggleOnOutlinedIcon className="icons" sx={{ fontSize: 30 }} />),
    createData('Bidding', 'Restricted Access', 'view create', '1 min ago',< ToggleOnOutlinedIcon className="icons" sx={{ fontSize: 30 }} />),
    createData('Vendor Portal', 'Restricted Access', 'view create','1 min ago',< ToggleOnOutlinedIcon className="icons" sx={{ fontSize: 30 }} />),
    createData('Purchase Order/Work Order', 'All Access', 'view create edit delete','1 min ago',< ToggleOnOutlinedIcon className="icons" sx={{ fontSize: 30 }} />),
    createData('Organisation Profile', 'All Access', 'view create edit delete','1 min ago',< ToggleOnOutlinedIcon className="icons" sx={{ fontSize: 30 }} />),
    createData('Permissions & Access Control', 'No Access',' ', '1 min ago',< ToggleOffOutlinedIcon className="icons" sx={{ fontSize: 30 }} />),

];


function User() {
    return (
        <div className="user">


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



            <div className="tableDiv">


                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Department/Role Name</TableCell>
                                <TableCell align="right">Access Level</TableCell>
                                <TableCell align="right">Summary</TableCell>
                                <TableCell align="right">Last Updated</TableCell>
                                {/* <TableCell align="right"> hello</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <Row key={row.name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            {/* <div className='user'>
                user is i am
            </div> */}

        </div>



    )
}

export default User
