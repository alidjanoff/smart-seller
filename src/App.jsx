// Router
import { Route, Routes } from "react-router-dom";

// Context
import { MainContext } from "./utils/MainContext";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MobileMenu } from "./mobilemenu/MobileMenu";

const App = () => {
  return (
    <MainContext>
      <Header />
      <MobileMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </MainContext>
  );
};

export default App;
