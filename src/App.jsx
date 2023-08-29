// Router
import { Route, Routes } from "react-router-dom";

// Context
import { MainContext } from "./utils/MainContext";

// Pages
import Home from "./pages/Home";
import { Questions } from "./pages/Questions";
import NotFound from "./pages/NotFound";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MobileMenu } from "./mobilemenu/MobileMenu";
import { Signin } from "./components/Signin";
import { Register } from "./components/Register";



const App = () => {
  return (
    <MainContext>
      <Header />
      <Signin />
      <Register />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/questions"  element={<Questions/>}/>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </MainContext>
  );
};

export default App;
