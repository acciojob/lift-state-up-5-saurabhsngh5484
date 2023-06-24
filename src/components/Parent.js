import React, {useState} from "react";
import Child from "./Child";

const Parent = ()=>{
    let [isLoggedIn, setisLoggedIn] = useState(false);

    function changeStatus(){
        setisLoggedIn(true);
    }

    return(
        <div>
            <h1>Parent Component</h1>
            {
                isLoggedIn?(<p>You are logged in!</p>):(<Child setStatus={changeStatus}></Child>)
            }
        </div>
    )
}

export default Parent;