import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";

import WithLoading from "../components/HOC/WithLoading";
import WithUser from "../components/HOC/WithUser";

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <WithUser>
      <WithLoading>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WithLoading>
    </WithUser>
  );
};
export default MyApp;
