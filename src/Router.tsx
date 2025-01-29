import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
