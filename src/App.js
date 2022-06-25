import './App.css';
import users from './Resources/Users.json'
import { DataGrid } from '@mui/x-data-grid';

function App() {

  const columns = [
    {
      field: 'userId',
      headerName: 'User Id',
      width: 75
    },
    {
      field: 'companyRole',
      headerName: 'Company Role',
      width: 160
    },
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 150
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 150
    },
    {
      field: 'preferredFullName',
      headerName: 'Preferred Name',
      width: 175
    },
    {
      field: 'password',
      headerName: 'Password'
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 100
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      width: 120
    },
    {
      field: 'emailAddress',
      headerName: 'Email',
      width: 250
    }
  ]
  
  const rows = users.Users
  
  return (
      <div className="table">
        <div className="tableheading">
          <h1>Employee Data</h1>
        </div>
        <div style={{ height: 400, width: "100%"}}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={3}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
  );
}

export default App;