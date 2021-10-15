import React from 'react'
import {animated, useTrail} from "react-spring"
import {v4 as uuidv4} from "uuid"
import Card from "../../Components/Card/Card" 

export default function List() {
    
    const trail = useTrail(12, {
        from :{opacity: 0, y: -100},
        to: {opacity: 1, y: 0}
    });
    
    return (
        <div className="list-container">
            {trail.map((card, index) => {
                return (
                    <animated.div
                        key={uuidv4()}
                        style={card}
                    >
                        <Card />
                    </animated.div>
                )
            })}
        </div>
    )
}
