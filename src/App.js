import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFount/NotFound";
import Delivery from "./pages/Delivery/Delivery";
import AboutUs from "./pages/AboutUs/AboutUs";
import News from "./pages/News/News";

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
