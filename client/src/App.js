import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import NavireList from './components/NavireList'
import NavireCreate from './components/NavireCreate'
import NavireEdit from './components/NavireEdit'
import CavalierEdit from './components/CavalierEdit'
import CavalierList from './components/CavalierList'
import CavalierCreate from './components/CavalierCreate'
import QuaiEdit from './components/QuaiEdit'
import QuaiList from './components/QuaiList'
import QuaiCreate from './components/QuaiCreate'


import Dashboard from './Dashboard'
import AuthProvider from './AuthProvider';

function App() {
  return (
   <Admin dashboard={Dashboard} authProvider={AuthProvider} dataProvider={restProvider('http://localhost:3000')}>
     <Resource name='navires' list={NavireList} create={NavireCreate} edit={NavireEdit}></Resource>
     <Resource name='dokers' list={UserList} create={UserCreate} edit={UserEdit}></Resource> 
     <Resource name='cavaliers' list={CavalierList} create={CavalierCreate} edit={CavalierEdit}></Resource> 
     <Resource name='postes' list={PostList} create={PostCreate} edit={PostEdit}></Resource>
     <Resource name='quais' list={QuaiList} create={QuaiCreate} edit={QuaiEdit}></Resource>  
   </Admin>
  );
}

export default App;

// The <Admin> component creates an application with its own state, routing, and controller logic. <Admin> requires only a dataProvider prop, and at least one child <Resource> to work:
