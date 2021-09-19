import { useEffect, useState } from "react";

function Usingeffect(){
    const [count,setCount] = useState(0)
    const [name,setName] = useState("Rahul")

    const inc=()=>{
        setCount(count+1)
    }
    const dec=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
    const name1=()=>{
        setName("Stump")
    }

    useEffect(()=>{
        console.log("component DidMount")
    },[]);

    useEffect(()=>{
        console.log("component DidUpdate")
    });

    useEffect(()=>{
        console.log("counting")
    },[count]);

    useEffect(()=>{
        return()=>{
            console.log("component DidUnmount")
        }
    })

    return(
        <>
        <h2>Count: {count}</h2>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={reset}>RESET</button>
        <h2>Name: {name}</h2>
        <button onClick={name1}>Change Name</button>
        </>
    )
}

export default Usingeffect;