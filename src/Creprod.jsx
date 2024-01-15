

import React, { useEffect } from 'react';
import { useForm} from "react-hook-form";
import { Box ,Stack,Typography,TextField, Button } from '@mui/material';
import { Form } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Creprod() {
    
    const navigte= useNavigate();

   
    const{handleSubmit,register,formState: { errors }}=useForm();
    const onSubmit=(data)=> {

       axios.post("http://localhost:3000/utilisateur",data).then((res)=>{
console.log(res);
navigte("/Conection");
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
<Typography variant="h5">INSCRIPTION</Typography>
<Form
onSubmit={handleSubmit(onSubmit)}
style={{

    marginTop:2,
}}
>




<TextField id="filled-basic" label="NOM CLIENT" variant="filled" fullWidth="small"
{...register("nomUtilisateur", { required:'SAISIR UN NOM' })} 



/>
<TextField id="filled-basic" label="DATE" variant="filled" fullWidth="small" type='password' {...register("Passworduser", { required:'SAISIR UN MOT DE PASSE' })}  />
<TextField id="filled-basic" label=" ENTRER VOTRE NOM" variant="filled" fullWidth="small" type='password' {...register("PasswordRE", { required:'SAISIR UN MOT DE PASSE' })}  />

<Button variant="contained" sx={{

    marginTop:2,
}}
type='sunmit'  

>INSCRIPTION</Button>
</Form>

</Box>



    </Stack>
  )
}
