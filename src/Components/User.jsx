import React from "react";
export const User=()=>{
    const [isAuth,setIsAuth]=React.useState(false)
    const [username, setUsername]=React.useState('')
    const [password, setPassword]=React.useState('')
 
    const handleAuth=()=>{
        setIsAuth(!isAuth)
    }
    const handleData=()=>{

        setIsAuth(!isAuth)
    }
    const handleLogin=()=>{
        if(username=='foo' && password=='bar'){
            setIsAuth(!isAuth)
        }
        else{
            alert('Enter valid details !!!')
        }
    }
    return (
        <>
            <div id="Navbar">
                {
                    isAuth ? <button onClick={()=>handleAuth()}>Log Out </button >: <button onClick={()=>handleLogin()}>Login</button>
                }
            </div>
            <div id="data">
                {isAuth? <h1>data</h1> : 
                        <div>
                            <input id="username" value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter Username"/>
                            <input id="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter Password"/>
                        </div>
                }   
            </div>
        </>
    )
}