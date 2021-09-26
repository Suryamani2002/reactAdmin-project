import React from 'react'
import './middle.css'
import { DataGrid } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const columns = [
  {
    field: 'id',
    headerName: 'Department/Role Name',
    width: 190,
    editable: false,
  },
  {
    field: 'firstName',
    headerName: 'Access Level',
    width: 150,
    editable: false,
  },
  {
    field: 'age',
    headerName: 'Last Updated',
    type: 'number',
    width: 110,
    editable: true,
  },

  {
    field: ' ',
    headerName: ' ',
    type: 'number',
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          <Link to={"/user/"+ params.row.id}>
            {/* <button className="userListEdit"> */}
              <RemoveRedEyeOutlinedIcon className="userListView" />
            {/* </button> */}
          </Link>
        </div>
      )
    }
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  // },
];

const rows = [
  { id: 'Management Team', 
  firstName:'Allow Access',
  
  age: 4 },



  { id: 'Procurement Team', firstName: 'Restricted Access', age: 8},
  { id: 'Project Team', firstName: 'Restricted Access', age: 16 },
  { id: 'IT Team', firstName: 'Restricted Access', age: 4},
  { id: 'Super Admin', firstName: 'All Access', age: 1},


];



function Middle() {
  return (
    <div>
      <div>
        <div style={{ height: 400, width: '70%', marginLeft: '85px', marginTop: '40px' }}>
          <DataGrid
            rows={rows}
            disableSelectionOnClick columns={columns}
            // pageSize={5}
            // rowsPerPageOptions={[5]}
            checkboxSelection
          // disableSelectionOnClick
          />
        </div>
      </div>
      {/* <div className="middlePart">
        Middle part where table shall be asdddsigned
      </div> */}
    </div>
  )
}

export default Middle
