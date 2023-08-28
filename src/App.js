import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFount/NotFound";
import Delivery from "./pages/Delivery/Delivery";
import AboutUs from "./pages/AboutUs/AboutUs";
import News from "./pages/News/News";
import Favourites from "./pages/Favourites/Favourites"
import UserPage from "./pages/UserPage/UserPage"
import BasketPage from "./pages/BasketPage/BasketPage"
import SingleProduct from "./pages/SingleProduct/SingleProduct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="news" element={<News />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="user-page" element={<UserPage />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="production/:slug" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
