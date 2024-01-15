

import React from 'react';
import { useForm} from "react-hook-form";
import { Box ,Stack,Typography,TextField, Button } from '@mui/material';
import { Form } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Listes() {
    const navigte= useNavigate();
   const[utilisateurs, setutilisateurs]= React.useState([])
    const{handleSubmit,register,reset,formState: { errors }}=useForm();
    const onSubmit=(data)=> {
  
       axios.post("http://localhost:3000/utilisateurs",data).then((res)=>{
console.log(res);
reset();


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
  
  <Stack 
   
   direction={"column"}
   gap={200}
   
   justifyContent={"center"} 
   width={"1"}
   height={"10vh"}
   backgroundColor={"orange"}
   > 
    



















    
    
<Box >  
<Button  alignItems={""}   variant="contained" href="/"  sx={{
marginRight:1,
marginTop:-0.2,
}}
type='submit'  

>ACCUEIL</Button>

</Box> </Stack>

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





<TextField id="filled-basic" label="ENTRER LE NOM " variant="filled" fullWidth="small"  {...register("NomProduit", { required:'SAISIR UN NOM POUR PRODUIT' })}  />
<TextField id="filled-basic" label=" ENTRER LE PRENOM" variant="filled" fullWidth="small"  {...register("PrUnitaire", { required:'SAISIR UN PRIX UNITAIRE' })}  />
<TextField id="filled-basic" label="GENRE" variant="filled" fullWidth="small"  {...register("QtProd", { required:'SAISIR UNE QUANTITE' })}  />

<Button variant="contained" sx={{

    marginTop:2,
}}
type='submit'  

>AJOUTER CLIENT</Button>


</Form>

</Box>



    </Stack>
  )
}
