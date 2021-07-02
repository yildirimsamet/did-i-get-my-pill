import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";
import { BASE_API } from "../environments";
import { getConfigForClient } from "../utils/getConfigForClient";
import { Controls, PlayState, Tween } from "react-gsap";
import { useLoading } from "../contexts/LoadingContext";
import { Divider } from "antd";

const Index = () => {
  const { user } = useUser();
  const {loading, setLoading}=useLoading()
  const [todaysPillTaken, setTodaysPillTaken] = useState<boolean>(null);
  useEffect(() => {
    setLoading(true)
    axios
      .get(BASE_API + "/user/isTodaysPillTaken", getConfigForClient())
      .then((res) =>{
        setTodaysPillTaken(res.data.data)
        setLoading(false)
      });
  }, []);
  if (user) {
    return (
      <div>
       
          <Tween
            from={{x:"-100%"}}
            duration={1}
            ease="back.out(1.7)"
          >
            <h1>
              Hello, <strong>{user.name}</strong> 🖐
            </h1>
          </Tween>
        
        {
          loading?"Loading...": <div>
            {todaysPillTaken
            ? "You took your pill today."
            : "You didnt take your pill yet."}
          </div>
        }
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default Index;
export const getServerSideProps = (ctx) => {
  const { req } = ctx;
  const { cookies } = req;
  if (!cookies.token) {
    return {
      redirect: {
        destination: "/login",
        permenant: false,
      },
    };
  }
  return {
    props: {},
  };
};
