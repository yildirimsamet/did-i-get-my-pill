import { useState } from "react"
import { LoadingProvider } from "../../contexts/LoadingContext"
import { ToastContainer } from 'react-toastify';

const WithLoading=({children})=>{
    const [loading,setLoading]=useState(false)
    return (
        <LoadingProvider value={{loading,setLoading}}>
            <ToastContainer/>
            {children}
        </LoadingProvider>
    )
}
export default WithLoading;