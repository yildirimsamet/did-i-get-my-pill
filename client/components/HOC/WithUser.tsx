import { useState } from "react"
import { UserProvider } from "../../contexts/UserContext"
import Cookies from "js-cookie"
import jwt from 'jsonwebtoken'
import { useEffect } from "react"

const WithUser=({children})=>{
    const [user,setUser]=useState(null)
    useEffect(()=>{
        const token= Cookies.get("token");
        console.log("effect")
        if(token){
            const user = jwt.decode(token);
            setUser(user)
        }
    },[])
    return (
        <UserProvider value={{user,setUser}}>
            {children}
        </UserProvider>
    )
}
export default WithUser;