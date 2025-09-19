import { useEffect, useState } from "react";

const CounterEffect =()=>{

    const[value,setValue] = useState(0);

    useEffect(()=>{
        setValue(value+1);
    },[value])


    return (
        <div>
            {}
        </div>
    )
}

export default CounterEffect;