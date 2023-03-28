import React, { useState } from 'react';
import './Therad.scss';

function Qanda() {
    const [th, setTh] = useState(null)



    const toggle = (i) => {

        if (th === i) {

            return setTh(null)
        }

        setTh(i)
    }





    return (
        <div className='theredA'>



            {data.map((item, i) => (

                <div className='expen-item'>

                    <div className='tittle-th' onClick={() => toggle(i)}>
                        <h6>{item.title}</h6>
                        <span>{th === i ? "-" : "+"}</span>


                    </div>
                    <hr />
                    <div className={th === i ? "contet-th" : "contet-th show"}>

                        <p>{item.content}</p>






                    </div>

                </div>

            ))}


        </div>
    )
}

const data = [


    {
        title: 'Introduction',

        content: 'The 4SA Method, How to bring a idea into process?'

    },

    {
        title: 'Thread A',

        content: 'How are you going to develop your strategy? Which method are you going to use to develop a strategy?What if the project is lengthy?'

    },
    {
        title: 'Transition 1',

        content: 'For preparing the strategy from the concept and build it into product one of the methods used is the 4SA approach'



    },
    {
        title: 'Thread B',

        content: 'Story for Alignment: Using the concepts we already have, let'
    },
    {
        title: 'Conclusion',

        content: 'The product is now ready to launch; we have a strategy-based plan from an innovative concept'


    }



]

export default Qanda;
