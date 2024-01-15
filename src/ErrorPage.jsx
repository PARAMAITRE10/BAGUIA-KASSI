import { useRouteError } from "react-router-dom";
import React from 'react'

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error)
  return (
    <div>
       <p>          ErrorPage           </p> 
       <p>          {error.StatusText|| error.message}          </p> 
        
       </div>
  );
}
