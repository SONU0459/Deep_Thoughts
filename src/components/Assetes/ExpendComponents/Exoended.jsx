import React, {useState} from 'react';
import './Expended.scss'

import { RiInformationFill } from "react-icons/ri";

function Exoended() { 

    const[expend ,setExpend] = useState(false);

    let btn = true;

    const toggle = () => {

      if(expend === btn){

       return setExpend(false)
       
      }
      setExpend(btn);
    }

    console.log(expend)


  return (
    <div className='expend-main'>

      {data.map((item , i)=> (

        <div className='expen-item'>

          <div className='expend-title'>

          <div className='expend-upper-title'>
            <h3>{item.title}</h3>
            <span onClick={toggle}><RiInformationFill /></span> 
          </div>

          </div>
          <div className= {expend===btn ? 'expend-Descripion':'expend-Descripion show'}>
              <h4>Description: <span>{item.Description}</span></h4>
          </div>

        </div>

      ))}
      
       
     

    </div>

    
 
  );
}

export default Exoended;

const data = [

  {
    title: "Technical Project Management",

    Description: "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",


  }
]