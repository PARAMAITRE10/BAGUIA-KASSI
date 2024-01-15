



import React from 'react';

import Creprod from './Creprod.jsx';
import Ajouter from './Ajouter.jsx';
import { useForm} from "react-hook-form";
import { Box ,Stack,Typography,TextField, Button } from '@mui/material';
import { Form } from 'react-router-dom';
import Listfacture from './Listfacture';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Crefacture from './Crefacture';
import List from './assets/List.jsx';
export default function Dashboard() {
    const navigte= useNavigate();
    const{handleSubmit,register,formState: { errors }}=useForm();
    const onSubmit=(data)=> {


navigte("/Inscription");
      

    }
   
    
    
    return (
       

    <Stack 
   
    direction={"column"}
    gap={2}
    alignItems={"center"}
    justifyContent={"center"} 
    width={"100"}
    height={"100vh"}
    backgroundColor={"grew"}
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





<Crefacture /></Box> 



  </Stack>
  <Stack 
   
   direction={"column"}
   gap={200}
   
   justifyContent={"center"} 
   width={"1"}
   height={"10vh"}
   
   > 
    
    
<Box marginLeft={15} marginTop={-20.5}>  





<Listfacture /></Box> 



  </Stack>
<Box  width={500}sx={{
backgroundColor:"white",
padding:3,


}}>
<Typography variant="h5">ETS-LYAM</Typography>
<Form
onSubmit={handleSubmit(onSubmit)}
style={{

    marginTop:2,
}}
>




<Button    variant="outlined" href="/Inscription"  sx={{

marginTop:2,
}}
type='submit'  
fullWidth="small"
>CREATION DE PRODUITS</Button>


<Button href="/Detail" variant="outlined" sx={{

marginTop:2,
}}
type='submit'  
fullWidth="small"
>ENREGISTRER  FACTURE</Button>
<Button variant="outlined" href="/Conection" sx={{

marginTop:2,
}}
type='submit'  
fullWidth="small"
>LISTES DE FACTURE</Button>

<Button variant="outlined"  href="/" sx={{

marginTop:2,
}}
type='submit'  
fullWidth="small"
>PAYEMENT MOBIL MONEY</Button>


<Button    variant="outlined" href="/"  sx={{

    marginTop:2,
}}
type='submit'  

>ACCUEIL</Button>
</Form>

</Box>



    </Stack>
  )
}
