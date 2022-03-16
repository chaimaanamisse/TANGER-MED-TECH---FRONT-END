import React from 'react'
import { 
    List, 
    Datagrid, 
    TextField,  
    EditButton, 
    DeleteButton 
} from 'react-admin';

const UserList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source='id'></TextField>
            <TextField source='nom'></TextField>
            <TextField source='email'></TextField>
            <EditButton basePath='/users'></EditButton>
            <DeleteButton basePath='/users'></DeleteButton>
        </Datagrid>

    </List>
  )
}
export default UserList;