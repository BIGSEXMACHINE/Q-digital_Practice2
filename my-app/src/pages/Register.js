import { useEffect, useState} from "react";

function Register(){

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

        function SignUp() {
            let item = (name, password, ConfirmPassword, email)
            console.warn(item)

            fetch("https://internsapi.public.osora.ru/api/auth/signup?name=&email=dasdasd@dasdas.ru&password=123123123&password_confirmation=123123123", {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(item),
                headers: {
                    "Content-type": 'application/json',
                    "Accept": 'application/json',
                }
            }).then((resp)=>{
                console.warn("resp",resp);
            })
        }

    return(
        <div>
            <h1>Registration</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
            <br/>
            <input type="text" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
            <br/>
            <input type="text" onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control" placeholder="password_confirmation"/>
            <br/>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
            <br/>
            <button className="submit">Submit</button>
            <button onClick={SignUp} className="login">Login</button>
        </div>
    )
}

export default Register