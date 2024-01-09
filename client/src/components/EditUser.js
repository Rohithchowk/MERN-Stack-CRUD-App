import {useState,useEffect} from 'react';
import { FormControl, FormGroup ,InputLabel,Input, Typography,styled,Button} from '@mui/material';
import {editUser,getUser} from '../service/apii';
import { useNavigate ,useParams } from 'react-router-dom';
const Container=styled(FormGroup)`
       width:50%;
       margin:5% auto 0 auto;  
       & > div{
        margin-top:20px;
       }
       
`
const defaultValue={
    Name:'',
    Email:'',
    Mobile:'',
    Adress:''
    
}
const EditUser=()=>{

    const [user,setUser]=useState(defaultValue);
    const {Name,Email,Mobile,Adress} = user;
    
    let navigate = useNavigate();

    const {id}=useParams();

    useEffect(()=>{
        loadUserDetails();
    },[])

    const loadUserDetails=async()=>{
        const response=await getUser(id);
        setUser(response.data);
        
        
        

    }

    const OnvalueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetails = async() => {
        await editUser(user,id);
        navigate('/all');
    }

    
    return(
        <div>
          
          <Container>
            <Typography variant="h4">EditUser</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>OnvalueChange(e)} placeholder='Name' name="Name" value={user.Name}></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>OnvalueChange(e) } placeholder='Email' name ="Email" value={user.Email}></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Mobile</InputLabel>
                <Input onChange={(e)=>OnvalueChange(e) } placeholder='Mobile'  name="Mobile" value={user.Mobile}></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Adress</InputLabel>
                <Input onChange={(e)=>OnvalueChange(e) } placeholder='Adress' name="Adress" value={user.Adress}></Input>
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={()=>editUserDetails()}>Edit User</Button>
            </FormControl>
          </Container>
        </div>
    )
}
export default EditUser;


