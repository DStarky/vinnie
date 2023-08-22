import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFount/NotFound";
import Delivery from "./components/pages/Delivery/Delivery";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import News from "./components/pages/News/News";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
