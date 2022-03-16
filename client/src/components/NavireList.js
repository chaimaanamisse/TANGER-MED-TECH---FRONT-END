import React from 'react'
import { 
    List, 
    Datagrid, 
    TextField,  
    EditButton, 
    DeleteButton 
} from 'react-admin';

const NavireList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source='id'></TextField>
            <TextField source='nom'></TextField>
            <TextField source='taille'></TextField>
            <TextField source='matricule'></TextField>
            <TextField source='type'></TextField>
            
            <EditButton basePath='/navires'></EditButton>
            <DeleteButton basePath='/navires'></DeleteButton>
        </Datagrid>

    </List>
  )
}
export default NavireList;