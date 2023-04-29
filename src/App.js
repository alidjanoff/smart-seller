// Router
import { Route, Routes } from "react-router-dom";

// Context
import Context from "./utils/MainContext";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Context>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Context>
  );
};

export default App;
