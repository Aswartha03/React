import React from "react";

function Display({count}){
    return (
        <>
            <p>This is a Simple Counter</p>
            <h3>Present Count : {count}</h3>
        </>
    )
}
export {Display}