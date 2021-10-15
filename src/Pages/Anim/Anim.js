import React, {useState, useRef, useEffect} from 'react'
import "./Anim.css"
import {useTransition, animated} from "react-spring"
import {v4 as uuidv4} from "uuid"

export default function Anim() {
    
    const [firstDisplay, setFirstDisplay] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setFirstDisplay(false)
        }, 10000)
    }, []);

    const [data, setData] = useState([
        {
            id: uuidv4(),
            txt: "Bora bora"
        },
        {
            id: uuidv4(),
            txt: "Brésil"
        },
        {
            id: uuidv4(),
            txt: "Crète"
        },
    ]);

    const inputRef = useRef();

    const handleData = event => {
        event.preventDefault()

        const newObj = {
            id: uuidv4(),
            txt: inputRef.current.value
        }

        setData([...data, newObj])

        inputRef.current.value = "";
    };

    const listAnim = useTransition(data, {
        from: {opacity: 0, transform: "translateX(10px)"},
        enter: {opacity: 1, transform: "translateX(0px)"},
        keys: data.map((item) => item.id)
    });
    
    return (
        <form onSubmit={handleData}>
            <label htmlFor="club">Indiquez votre destination favorite !</label>
            <input ref={inputRef} type="text" id="club" />
            
            {firstDisplay ? (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.txt}</li>
                    ))}
                </ul>

            ) : (
                <ul>
                    {listAnim((styles, item) => {
                        return (
                            <animated.li style={styles}>
                                {item.txt}
                            </animated.li>
                        )
                    })}
                </ul>
            )}
        </form>
    );
}