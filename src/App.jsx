

import React from 'react';
import { useForm} from "react-hook-form";
import { Box ,Stack,Typography,TextField, Button, Avatar } from '@mui/material';
import { Form } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function App() {
    
   const[utilisateurs, setutilisateurs]= React.useState([]);
    
    const{handleSubmit,register,formState: { errors }}=useForm();
    const onSubmit=(data)=> {
        console.log(data);
       axios.get("http://localhost:3000/utilisateurs",data).then((res)=>{
        
        setutilisateurs(res.data);

       })

    }
    
    
    
    return (
    <Stack 
    direction={"column"}
    gap={2}
    alignItems={"center"}
    justifyContent={"center"} 
    width={"100"}
    height={"100vh"}
    backgroundColor={"brown"}
    >
<Box  width={500}sx={{
backgroundColor:"white",
padding:3,


}}>

<Form
onSubmit={handleSubmit(onSubmit)}
style={{

    marginTop:2,
}}
>







<Button variant="contained" sx={{

    marginTop:2,
}}
type='submit'  

>AFFICHER LISTES CLIENTS</Button>   <Button variant="contained" sx={{

marginTop:2,
}}
type='submit'  
href='/'
>ACCUEIL</Button>
</Form>

</Box>

<Box  width={'50%'} margin={"auto"}sx={{
backgroundColor:"white",
padding:3,


}} >


    

{utilisateurs.map((publicatio)=><Box borderRadius={"4"}
>
    
    

    <Stack  direction={"row"} 
 
 
    width={"10"}
    height={"10vh"}
    backgroundColor={""}>
    
   
    <Typography>{publicatio.nomUtilisateur} </Typography>
   </Stack>
   
  
   </Box>
  
 
    )
}



</Box>

    </Stack> )
}
