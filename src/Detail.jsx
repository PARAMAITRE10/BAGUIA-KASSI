

import React from 'react';
import { useForm} from "react-hook-form";
import { Box ,Stack,Typography,TextField, Button } from '@mui/material';
import { Form } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
    
   const[utilisateurs, setutilisateurs]= React.useState([])
    const{handleSubmit,register,reset,formState: { errors }}=useForm();
    const onSubmit=(data)=> {
  
       axios.post("http://localhost:3000/factures",data).then((res)=>{

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
    



















    
    
<Box   sx={{
marginLeft:60,
marginTop:2,
}} >  

<Typography variant="h5">ENREGISTRER FACTURE</Typography>
 

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




<TextField id="filled-basic" label="REFERENCE PRODUIT" variant="filled" fullWidth="small"
{...register("refProduit", { required:'SAISIR REFERENCE ' })} 

/>
<TextField id="filled-basic" label=" NOM CLIENT" variant="filled" fullWidth="small"  {...register("Nomclt", { required:'SAISIR UN NOM CLIENT' })}  />
<TextField id="filled-basic" label=" DATE FACTURE" variant="filled" fullWidth="small"  {...register("PrUnitaire", { required:'SAISIR UN PRIX UNITAIRE' })}  />
<TextField id="filled-basic" label=" TVA(18%)" variant="filled" fullWidth="small"  {...register("QTva", { required:'SAISIR TVA(18%)' })}  />
<TextField id="filled-basic" label="MONTANT HT " variant="filled" fullWidth="small"  {...register("MontantHt", { required:'SAISIR UN MONTANT HT' })}  />
<TextField id="filled-basic" label=" MONTANT TTC" variant="filled" fullWidth="small"  {...register("Mttc", { required:'SAISIR UN MONTANT TTC' })}  />
<TextField id="filled-basic" label=" REFERENCE PRODUIT" variant="filled"   {...register("RefProd", { required:'SAISIR UNE REFERENCE PRODUIT' })}  />
<TextField id="filled-basic" label="NOM PRODUIT " variant="filled"   {...register("NomProduit", { required:'SAISIR UN NOM POUR PRODUIT' })}  />
<TextField id="filled-basic" label=" QUANTITE" variant="filled"   {...register("QtProd", { required:'SAISIR QUANTITE' })}  />
<TextField id="filled-basic" label=" PRIX UNITAIRE" variant="filled" {...register("PrUnitaire", { required:'SAISIR PRIX UNITAIRE' })}  />
<TextField id="filled-basic" label=" MONTANT" variant="filled" fullWidth="small"  {...register("Montant", { required:'SAISIR MONTANT' })}  />
<TextField id="filled-basic" label=" VALIDITE DE L'OFFRE" variant="filled"  {...register("Voffre", { required:'VALIDITE OFFRE' })}  />

<Button variant="contained" sx={{

    marginTop:2,
}}
type='submit'  

>ENREGISTRER</Button><Button  alignItems={""}   variant="contained" href="/"  sx={{
marginLeft:1,
marginTop:2,
}}
type='submit'  

>ACCUEIL</Button>
</Form>

</Box>



    </Stack>
  )
}
