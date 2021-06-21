import { useState } from "react";
import { Input, Button } from "antd";
import styles from "./styles.module.scss";
import { FcLock } from "react-icons/fc";
import { useLoading } from "../../contexts/LoadingContext";
import { BASE_API } from '../../environments';
import { toast } from 'react-toastify'
import axios from 'axios'
interface IUserInfos {
  email: string;
  name: string;
  surname: string;
  password: string;
}
const Register = () => {
  
  const { loading, setLoading } = useLoading();
  const [userInfos, setUserInfos] = useState<IUserInfos>({
    email: "",
    password: "",
    name: "",
    surname: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await axios.post(BASE_API+"/user/signup",userInfos)
    console.log(data)
    setLoading(false)

  };

  const handleChange = (e) => {
    setUserInfos({ ...userInfos, [e.target.name]: e.target.value });
  };
  
  return (
    <div className={styles.register}>
      <h3 className={styles.registerHeader}>
        Kayıt Ol <FcLock fontSize={30} />
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
        <div className={styles.registerFormItem}>
          <Input
            required
            id="registerName"
            name="name"
            type="text"
            placeholder="Ad"
            value={userInfos.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.registerFormItem}>
          <Input
            required
            id="registerSurname"
            name="surname"
            type="text"
            placeholder="Soyad"
            value={userInfos.surname}
            onChange={handleChange}
          />
        </div>
        <Button loading={loading} type="primary" htmlType="submit">
          Gönder
        </Button>
      </form>
    </div>
  );
};
export default Register;
