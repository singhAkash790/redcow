import React, { useState } from 'react'

export const Myaccordian = (props) => {
    const [show, setShow] = useState(false);
    return (
        <>           
           <div className="question" onClick={() => setShow(!show)} data-aos="fade-up" data-aos-delay="600" data-aos-once="true" data-aos-duration="1000">
                                <div className="arrow" onClick={() => setShow(!show)}> {show? "–" : "+"}</div>
                                <h3>{props.question}</h3>
                                </div>
                                { show && 
                                <div className="answer">
                                    <ul>
                                    {props.answer.map((ans,index) => {
                                         return <li key={index}>{ans[0]} <span>{ans[1]}</span></li>
                                    })}
                                    </ul>
                                </div>
            }                           
        </>
    )
}
