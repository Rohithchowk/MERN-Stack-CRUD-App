import { Button, Table, TableBody, TableCell, TableHead, TableRow ,styled} from "@mui/material";

import { getUsers ,deleteUser} from "../service/apii";
import {component, useEffect,useState} from 'react';
import { Link } from "react-router-dom";
const StyledTbale=styled(Table)`
      width:90%;
      margin:50px  auto  0 auto;
      border:5px;
`
const Thead=styled(TableRow)`
    background-color:black;
    & > th{
        color:white;
        font-size:20px;
    }
    
`
const Tbody=styled(TableRow)`
  & > td {
    font-size:14px;
  }
`
const AllUsers=()=>{
    
    const [users,setUsers]=useState([]);
    useEffect(()=>{
         getAllUsers();
    },[]);

    const getAllUsers=async()=>{
        let response = await getUsers();
        // console.log(response.data);
        setUsers(response.data);

    }

    const deleteUserDetails=async(id)=>{
           await deleteUser(id);
           getAllUsers();
    }

    return(
        
        <StyledTbale>
            <TableHead>
               <Thead>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Adress</TableCell>
                  <TableCell></TableCell>
               </Thead>
            </TableHead>
            <TableBody>
               {
                users.map(user=>(
                    <Tbody key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.Name}</TableCell>
                        <TableCell>{user.Email}</TableCell>
                        <TableCell>{user.Mobile}</TableCell>
                        <TableCell>{user.Adress}</TableCell>
                        <TableCell>
                           <Button variant="contained" style={{marginRight:10}} component= {Link} to= {`/edit/${user._id}`} >Edit</Button>
                           <Button variant="contained" style={{background:'red'}} onClick={()=>deleteUserDetails(user._id)}  >Delete</Button>
                        </TableCell>
                    </Tbody>
                ))
               }
            </TableBody>

        </StyledTbale>
    )
}
export default AllUsers;