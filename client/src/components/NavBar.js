import {AppBar,Toolbar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';
const Header=styled(AppBar)`
       background-color:black;
`
const Tabs=styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:white;
    text-decoration:None

`


const NavBar=()=>{
    return(
        
       
        <Header position ="static">
            <Toolbar>
            <Tabs to='/'>Site</Tabs>
            <Tabs to='/all'>All Users</Tabs>
            <Tabs to='/add'>Add User</Tabs>

            


            
            </Toolbar>
        </Header>
       
    )
}

export default NavBar;