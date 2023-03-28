import React, { useState } from 'react';
import './Therad.scss';



function Therad() {

  const [th, setTh] = useState(false)

  let value = true;

  const conetentDown = () => {

    if (th === value) {

      return setTh(false)

    }

    setTh(value)

  }





  return (
    <div className='theredA'>

      <div className='tittle-th' onClick={conetentDown}>
        <h6>Thread A</h6>
        <span>{th === value ? "-" : "+"}</span>


      </div>
      <hr />
      <div className={th === value ? "contet-th" : "contet-th show"}>

        <div className='input-th'>

          <input type="text" placeholder='Text..1' required />
          <input type="text" placeholder='Text..2' required />

        </div>


        <button type='submit'>Submit</button>

      </div>


    </div>
  );
}

export default Therad;

