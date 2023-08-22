import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/screens/NotFount/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
