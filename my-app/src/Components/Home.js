import React from "react";

function Home() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>
            <button onClick={handleClick}>Logout</button>
        </>
    )
}
export default Home;