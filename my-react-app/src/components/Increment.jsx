import React from "react";

function Increment({setCount,count}){

    function increase(){
        setCount(count+1)
    }
    return (
        <>  
            <button onClick={increase}>Increment Count</button>
        </>
    )
}
export default Increment