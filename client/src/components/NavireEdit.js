import React from 'react'
import { 
    Edit, 
    SimpleForm, 
    TextInput
} from 'react-admin';

export const NavireEdit = (props) => {
  return (
    <Edit title='Edit Navire' {...props}>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='nom'/>
            <TextInput source='taille'/>
            <TextInput source='matricule'/>
            <TextInput source='type'/>
        </SimpleForm>
    </Edit>
  )
}

export default NavireEdit;