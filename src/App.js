import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Textform from "./components/Textform";
import {
  BrowserRouter,
  Routes, // Import Routes instead of Switch
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
    <Navbar Navbar="TextUtils" Home="Home" About="About" Service="Service"/>
    <BrowserRouter>
        <Routes> {/* Use Routes here */}
          <Route path="/" element={<Textform label="ENTER THE TEXT TO ANALYZE"/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />

        </Routes>
      </BrowserRouter>      
    <Footer link="TextUtils" year="2024"/>
    

    </>
  );
}

export default App;
