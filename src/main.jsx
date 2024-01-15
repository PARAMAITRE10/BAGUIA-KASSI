import React from 'react';
import ReactDOM from 'react-dom/client';
import Ajouter from './Ajouter.jsx';
import Ajfacture from './Ajfacture.jsx';
import App from './App.jsx';
import Conection from './Conection.jsx';
import Incrip from './Ajfacture.jsx';
import Dashboard from './Dashboard.jsx';
import Inscription from './Inscription.jsx';
import Crefacture from './Crefacture.jsx';
import Creprod from './Creprod.jsx';
import Detail from './Detail.jsx';
import List from './assets/List.jsx';
import Listfacture from './Listfacture.jsx';
import Lifacture from './assets/Lifacture.jsx';
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx';

const router = createBrowserRouter([


   {
  
  path: "",
  element : <Dashboard/>,
  errorElement:<ErrorPage/>,
  
 }
  ,
  {
  
    path: "/Ajouter",
    element : <Ajouter />,
   
    
    },



  
    
  {
  
    path: "/Conection",
    element : <Conection />,
    
    },
    {
  
      path: "/Inscription",
      element : <Inscription/>,
      
      }

      ,
      

  {

    path: "/Detail",
    element : <Detail/>,
    
    },

    {

      path: "/App",
      element : <App/>,
      
      },
      {

        path: "/Ajfacture",
        element : <Ajfacture/>,
        
        },
{

path: "/Crefacture",
element : <Crefacture/>,

},
{

path: "/Listfacture",
element : <Listfacture/>,

}  ,
{

  path: "/Lifacture",
  element : <Lifacture/>,
  
  }  ,
  {

    path: "/List",
    element : <List/>,
    
    }  ,
{

  path: "/Creprod",
  element : <Creprod/>,
  
  } 
   ]);
  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>

  </React.StrictMode>,
)
;