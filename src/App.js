import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginSuccess from "./pages/LoginSuccess";
import { UserAuthContextProvider } from "./context/UserAuthContext";
//import Alert from "./components/Alert";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Alert /> */}
        <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="loginsuccess" element={<LoginSuccess />} />
        </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
