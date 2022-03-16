import React from 'react'
import { 
    Create, 
    SimpleForm, 
    TextInput, 
    DateInput 
} from 'react-admin';

export const UserCreate = (props) => {
  return (
    <Create title='Create a User' {...props}>
        <SimpleForm>
            <TextInput source='nom'/>
            <TextInput multiline source='body'/>
            <DateInput label='Published' source='publishedAt'/>
        </SimpleForm>
    </Create>
  )
}

export default UserCreate;