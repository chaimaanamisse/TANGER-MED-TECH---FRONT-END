import React from 'react'
import { 
    Create, 
    SimpleForm, 
    TextInput 
} from 'react-admin';

export const NavireCreate = (props) => {
  return (
    <Create title='Create a Navire' {...props}>
        <SimpleForm>
            <TextInput source='nom'/>
            <TextInput source='taille'/>
            <TextInput source='matricule'/>
            <TextInput source='type'/>
        </SimpleForm>
    </Create>
  )
}

export default NavireCreate;