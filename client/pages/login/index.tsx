import styles from './styles.module.scss';
import { Button,Input } from 'antd';
import { useState } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import { FcUnlock } from 'react-icons/fc'
import  axios from 'axios'
import { BASE_API } from '../../environments';
import { IUserLogin } from '../../types';
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { useUser } from '../../contexts/UserContext';
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'
interface IUserInfos {
    email:string
    password:string
}

const Login = () =>{
    const { loading,setLoading }=useLoading();
    const { setUser }=useUser();
    const router = useRouter();
    const [userInfos,setUserInfos]=useState<IUserInfos>({email:"",password:""})

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true)
       const { data } = await axios.post<IUserLogin>(BASE_API+"/user/signin",userInfos)
       setLoading(false)
       if(data.success===true){
           Cookies.set('token',  data.data, { expires: 1 });
           const user = jwt.decode(data.data)
           setUser(user)
           toast.success("Giriş Başarılı",{position:"top-right",autoClose:1500})
           router.push("/")
       }else{
           toast.error(data.message,{position:"top-right",autoClose:1500})
       }
    }

    const handleChange=(e)=>{
        setUserInfos({...userInfos,[e.target.name]:e.target.value})
    }
    return(
        <div className={styles.register}>
        <h3 className={styles.registerHeader}>
          Giriş Yap <FcUnlock fontSize={30} />
        </h3>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div className={styles.registerFormItem}>
            <Input
              required
              id="registerEmail"
              name="email"
              type="email"
              placeholder="Email"
              value={userInfos.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.registerFormItem}>
            <Input
              required
              id="registerPassword"
              name="password"
              type="password"
              placeholder="Parola"
              value={userInfos.password}
              onChange={handleChange}
            />
          </div>
          <Button loading={loading} type="primary" htmlType="submit">
            Gönder
          </Button>
        </form>
      </div>
    )
}
export default Login;