import React, { useState } from 'react';
import dataTips from "./dataTips";

const Tips = () => {

    const [tips] = useState(dataTips);

    return(
        <div className='tips-component'>
        {tips.map((item) => {
            const {id, heading, text, image} = item;
            return(
                <section className="tips" key={id}>
                    <section className="tips-container">
                        <div>
                            <img className='tips-image' src={image} alt="tips icon"/>
                        </div>
                        <div className="tip">
                            <h4>{heading}</h4>
                            <p className='tips-text'>{text}</p>
                        </div>
                    </section>
                </section>
            )
        })}
        </div>
    );
};

export default Tips;