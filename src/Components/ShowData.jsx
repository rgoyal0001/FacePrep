// import React from "react";
// import { auth } from "./Navbar";
// export const ShowData =()=>{
//     console.log(auth)
//     const [username, setUsername]=React.useState('')
//     const [password, setPassword]=React.useState('')
//     const handleSubmit=()=>{
//         if(username=='foo' && password=='bar'){
            
//         }
//     }
//     return (
//         <>
//            {auth? <h1>data</h1> : 
//                     <div>
//                         <input id="username" value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter Username"/>
//                         <input id="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter Password"/>
//                         <button onClick={()=>handleSubmit()}>Submit</button>
//                     </div>
//             }   
//         </>
//     )
// }