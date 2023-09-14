import { Outlet } from "react-router-dom";
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Newsletter from './../components/Footer/Newsletter/Newsletter';

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
};

export default Main;
