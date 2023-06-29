import React, { useRef } from "react";
import Main from "./Main";
import "./style.css"

function LoginWithLocalStorage(){
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(email.current.value=="ilyagames9019@gmail.com"&&password.current.value=="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345")
        }
    }

    return(
        <div className="container-row">
            {
                getEmail&&getPassword?
                    <Main/>:
                    <div className="login">
                        <form onSubmit={handleSubmit}>
                            <h1>Login</h1>
                            <div>
                                <input type="text" ref={email} placeholder="Your Email address..." required />
                            </div>
                            <div>
                                <input type="password" ref={password} placeholder="Your password..." required />
                            </div>
                            <button>Login</button>
                        </form>
                    </div>
            }
        </div>
    );
}
export default LoginWithLocalStorage;