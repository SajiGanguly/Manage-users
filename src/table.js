import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead,Typography, TableRow, Paper, Button, Toolbar , AppBar, Divider} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import UserRolesFormModal from './Dialogue';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'; 
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// Import the icons you use
// import MailIcon from '@mui/icons-material/Mail';
import SelectVariants from './UserRole';
import Fingerprint from '@mui/icons-material/Fingerprint';

  const buttonstyle = {
    marginRight: '4px',
     // Add right margin to separate the buttons
  };
  
 const tableStyle = {
    background: 'linear-gradient(45deg, #e4e4e4 30%, #f9f9f9 70%,#c7c7c7 80%)',
    color: '#e1e1e1',
 }
const headerStyle = {
    background: 'linear-gradient(45deg, #6b6b6b 30%, #6b6b6b 90%)', // Replace with your desired gradient
    color: '#fff', // Change to your desired text color
    padding: '20px', // Adjust the padding as needed
    textAlign: 'center', 
    display:"flex",
    justifyContent:"space-between", // Center the text
  };

  const barStyle = {
    background:'#424242',
    border: '1px solid #ccc',  // Add a 1px solid border around the div
    borderRadius: '5px',       // Add a 5px border radius to round the edges
    padding: '10px',           // Add 10px of padding inside the div
    marginBottom: '10px',      // Add margin at the bottom of the div
    // You can also add other CSS properties as needed
  };
  const barStyle1 = {
    border: '1px solid #ccc',  // Add a 1px solid border around the div
    borderRadius: '5px',       // Add a 5px border radius to round the edges
    padding: '10px',           // Add 10px of padding inside the div
    marginBottom: '10px',      // Add margin at the bottom of the div
    // You can also add other CSS properties as needed
  };
  const toolbarStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '10px',
    marginRight:'20px',
    
  };
  const containerStyle = {
    display:'flex',
   
  };
  const logoStyle = {
    paddingBottom:'50px',
    border: '2px solid #ccc',  // Add a 1px solid border around the div
    borderRadius: '4px',       // Add a 5px border radius to round the edges
    padding: '30px',           // Add 10px of padding inside the div
    marginBottom: '10px',
  };

const CrudTable = () => {
  // Sample data (you can replace this with your own data)
  const [data, setData] = useState([
    { id: 1, action: 'action', username: 'Admin' , role:'react', fullname:'Admin', email:'hello@gmail.com',profileimage:'None', createdat:'N/A'},
    { id: 2, action: 'action', username: 'Admin1' , role:'react', fullname:'Admin1', email:'admin1@gmail.com',profileimage:'None', createdat:'N/A' },
    { id: 3, action: 'action', username: 'Admin2' , role:'react', fullname:'Admin2', email:'admin2@gmail.com',profileimage:'None', createdat:'N/A' },
    { id: 4, action: 'action', username: 'Admin3' , role:'react', fullname:'Admin3', email:'admin3@gmail.com',profileimage:'None', createdat:'N/A' },
  ]);
  const [openUserRoleModal, setOpenUserRoleModal] = useState(false); // State to manage the modal open/close

  // Function to open the User Roles modal
  const handleOpenUserRoleModal = () => {
    setOpenUserRoleModal(true);
  };

  // Function to close the User Roles modal
  const handleCloseUserRoleModal = () => {
    setOpenUserRoleModal(false);
  };


  // Function to delete an item
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <>
      {/* <div style={{display:'flex'}}>  
      <div style={{}}>
      <div style={logoStyle}>
               LOGO
            </div>
      <div  style={containerStyle}>
        <Toolbar style={toolbarStyle}>
        
        <List >
            
        {['Feed', 'Leads', 'Customers', 'Stock List','call Logs','tasks Trackers','Client Waitlist'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <DynamicFeedIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        </Toolbar>
        </div>
        </div> */}
        
        <div style={{width:'100%'}}>
         <div >   
        <Typography variant="h4" style={headerStyle} gutterBottom>
        Manage Users
        <div>
  <Button variant="contained" color="secondary" style={buttonstyle}onClick={handleOpenUserRoleModal}>
   User Roles
 
  </Button>
  {/* <Fingerprint/> */}
  <Button variant="contained" color="success" style={buttonstyle}>
    Add User
  </Button>
  </div>
  <UserRolesFormModal open={openUserRoleModal} onClose={handleCloseUserRoleModal}/>
</Typography>

</div> 

<div style={barStyle}>
 <navbar>
   
 </navbar>
</div>



     
     <div style={barStyle1}>
    <TableContainer component={Paper} >
      <Table>
        <TableHead>
          <TableRow style={tableStyle}>
          <TableCell>Actions</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Full-Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Profile-Image</TableCell>
            <TableCell>CreatedAt</TableCell>
           
          </TableRow>
          
        </TableHead>
        
        <TableBody>
            
          {data.map((item) => (
            <TableRow key={item.id}>
              
              <TableCell>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Edit />}
                  onClick={() => {
                    // Handle edit logic here
                    // You can open a modal or navigate to an edit page
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<Delete />}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
                </div>
              </TableCell>
             
              <TableCell>{item.username}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.fullname}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.profileimage}</TableCell>
              <TableCell>{item.createdat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div> 
    {/* </div> */}
    </>
  );
};

export default CrudTable;
