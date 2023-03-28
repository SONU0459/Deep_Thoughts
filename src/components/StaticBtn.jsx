 import React from 'react';
 import { IoIosPeople } from "react-icons/io";
 import { BsQuestionCircle } from "react-icons/bs";
 import { BsFillCalendar2RangeFill } from "react-icons/bs";
 
 function StaticBtn() {
   return (
      
<div className='static-btn'>

    
    
    <button><BsQuestionCircle /></button>
    <button> <IoIosPeople /></button>
    <button><BsFillCalendar2RangeFill /></button>
</div>
   );
 }
 
 export default StaticBtn;
 
  