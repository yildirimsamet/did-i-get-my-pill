import { useState } from "react"
import { UserProvider } from "../../contexts/UserContext"
import Cookies from "js-cookie"
import jwt from 'jsonwebtoken'
import { useEffect } from "react"
import { IUser } from "../../types"

const WithUser=({children})=>{
    const [user,setUser]=useState<IUser>(null)
    useEffect(()=>{
        const token= Cookies.get("token");
        if(token){
            const user:IUser = jwt.decode(token);
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