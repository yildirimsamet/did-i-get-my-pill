import '../styles/globals.scss'
import 'antd/dist/antd.css';
import WithLoading from '../components/HOC/WithLoading';

const MyApp=({ Component, pageProps })=>{
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
   <WithLoading>
      <Layout>
      <Component {...pageProps} />
    </Layout>
   </WithLoading>
  )
}
export default MyApp;
