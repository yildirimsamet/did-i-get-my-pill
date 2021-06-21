const Index =()=>{
  return (
    <h1>Home</h1>
  )
}
export default Index;
export const getServerSideProps=(ctx)=>{
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
    props:{}
  }
}
