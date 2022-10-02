import { Routes, Route } from "react-router-dom";
import Header from './component/header';
import HomeProduct from './component/homeProduct';
import Information from './component/information';
import Footer from './component/footer';
import Blog from './component/blog'
import SingleBlog from "./component/singleBlog";
import Contact from "./component/contact";
import Policy from './component/policy'
import Promotion from './component/promotion'
import DetailPromotion from './component/detailPromotion'
import HeaderCart from "./component/headerCart";
import SingleCart from "./component/singleCart";
import ScrollToTop from "./component/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Header />
      <HeaderCart />
      <Routes>
        <Route index path='/' element={<HomeProduct />} ></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/blog/singleBlog' element={<SingleBlog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/policy' element={<Policy />}></Route>
        <Route path='/promotion' element={<Promotion />}></Route>
        <Route path='/singleCart' element={<SingleCart />}></Route>
        <Route path='/promotion/detailPromotion' element={<DetailPromotion />}></Route>
      </Routes>
      <Information />
      <Footer />
    </>
  );
}

export default App;
