import * as React from 'react';
import { useState } from 'react';

import {

  DataGrid,

  GridToolbarContainer,

  GridToolbarColumnsButton,

  GridToolbarFilterButton,

  GridToolbarExport,

  GridToolbarDensitySelector,

} from '@mui/x-data-grid';

import { Button,Typography } from '@mui/material';

import AddUser from './AddUser';
import SelectVariants from './UserRole';
 

export default function CrudTable() {
 

  const [data,setData]= React.useState([

    { id: 1, action:'', username: 'Saji1234', role: 'React.js', firstname:'Saji', lastname:'Ganguly', email:'sganguly@entiovi.com',isactive:'True', createdat:'12/10/2023'},

    { id: 2, action:'', username: 'admin1', role: 'Node.js', firstname:'admin1', lastname:'nlb', email:'admin1@gmail.com', isactive:'False', createdat:'--'},

    { id: 3, action:'', username: 'admin2', role: 'Frontend', firstname:'admin2', lastname:'entiovi', email:'admin2@gmail.com',isactive:'False', createdat:'--'},

    { id: 4, action:'', username: 'admin3', role: 'Backend', firstname:'admin3', lastname:'nlb', email:'admin3@gmail.com',isactive:'False', createdat:'--'},

    { id: 5, action:'', username: 'admin4', role: 'UI/UX', firstname:'admin4', lastname:'entiovi', email:'admin4@gmail.com', isactive:'True', createdat:'--'},

  ]);

 

  const handleDelete = (id) => {

    const updatedData = data.filter((item) => item.id !== id);

    setData(updatedData);

  };

  

const columns = [

  

  {field:'id', headerName:'ID', width: 150},

  { field: 'username', headerName: 'Username', width: 200 },

  

  {

    field: 'firstname',

    headerName: 'First Name',

    width: 200,

    valueGetter: (params) =>

      `${params.row.firstname || ''} `

  },

  {

    field: 'lastname',

    headerName: 'Last Name',

    width: 200,

    valueGetter: (params) =>

      `${params.row.lastname || ''} `

  },

  { field: 'role', headerName: 'Role', width: 200 },

  { field: 'email', headerName: 'Email', width: 250 },

  

  { field: 'createdat', headerName: 'Created At', width: 200 },

  { field: 'action', headerName: 'Action', width: 230, renderCell:(params)=>(

    <div style={{display:"flex",gap:"10px"}}>

    <Button variant='contained'>Edit</Button>

    <Button variant='contained' color='error' onClick={() => handleDelete(params.row.id)}>Delete</Button>

    </div>

  ) },

  { field: 'isactive', headerName: 'Is Active', width: 150 }

];

 

 

 

const CustomToolbar=()=> {

  return (

    <>

    <GridToolbarContainer style={{backgroundColor:"#20A0D8"}}>

      <GridToolbarColumnsButton style={{color:"white"}}/>

      <GridToolbarFilterButton style={{color:"white"}}/>

      <GridToolbarDensitySelector style={{color:"white"}}/>

      <GridToolbarExport style={{color:"white"}}/>

    </GridToolbarContainer>

    

    </>

  );

}

 

  return (

    <>

    <div style={{padding:"20px"}}>

      <div style={{display:"flex",justifyContent:"space-between"}}>

      <Typography variant='h3'style={{color:'#66ccf1'}} gutterBottom>Manage Users</Typography>

      <div style={{display:"flex",alignItems:"center",padding:"10px"}}>

      <Button variant='contained' color='error' style={{marginRight:"10px"}}>User Roles</Button>

      <AddUser/>

      </div>

      </div>

    <div style={{ height: '100vh' }}>

      <DataGrid

        rows={data}

        columns={columns}

        slots={{

          toolbar: CustomToolbar,

        }}

        initialState={{

          pagination: {

            paginationModel: { page: 0, pageSize: 5 },

          },

        }}

        pageSizeOptions={[5, 10]}>

        </DataGrid>

    </div>

    </div>
    

    </>

  );

}