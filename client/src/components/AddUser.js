import {useState} from 'react';
import { FormControl, FormGroup ,InputLabel,Input, Typography,styled,Button} from '@mui/material';
import {addUser} from '../service/apii';
import { useNavigate } from 'react-router-dom';
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
const AddUser=()=>{

    const [user,setUser]=useState(defaultValue);
    const {Name,Email,Mobile,Adress} = user;
    
    let navigate = useNavigate();

    const OnvalueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    
    return(
        <div>
          
          <Container>
            <Typography variant="h4">AddUser</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>OnvalueChange(e)} placeholder='Name' name="Name" value={Name}></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>OnvalueChange(e) }placeholder='Email' name ="Email" value={Email}></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Mobile</InputLabel>
                <Input onChange={(e)=>OnvalueChange(e) } placeholder='Mobile'  name="Mobile" value={Mobile}></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Adress</InputLabel>
                <Input onChange={(e)=>OnvalueChange(e) } placeholder='Adress' name="Adress" value={Adress}></Input>
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={()=>addUserDetails()}>AddUser</Button>
            </FormControl>
          </Container>
        </div>
    )
}
export default AddUser;