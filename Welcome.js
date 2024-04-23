import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


 function Welcome() {
  return (
    
        <div>
            <nav>
            <Link to="/login">

               <button>login</button>
               </Link>
                
               
               <Link to="/signup">
               <button> signup
               
               </button>

               </Link>
               
            </nav>
           
        </div>
    
  )
}
export default Welcome;
