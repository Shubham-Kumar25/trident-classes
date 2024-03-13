import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./page/LandingPage/LandingPage";
import ContactUsMain from "./components/ContactUsMain/ContactUsMain";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Headroom from "react-headroom";

function App() {
  return (
    <>
      <Headroom
        style={{
          background: "white",
          transition: "all .5s ease-in-out",
          zIndex: 10,
        }}
      >
        <Header />
      </Headroom>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactus" element={<ContactUsMain />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
