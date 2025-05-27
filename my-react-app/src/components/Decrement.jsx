import React from "react";

function Decrement({setCount,count}){

    function decrease(){
        if(count>=1)
            setCount(count-1)
    }
    return (
        <>  
            <button onClick={decrease}>Decrement Count</button>
        </>
    )
}
export default Decrement