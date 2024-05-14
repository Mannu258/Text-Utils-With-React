import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {

  return (
    <>
    <Navbar Navbar="TextUtils" Home="Home" About="About" Service="Service"/>

    <Textform label="ENTER THE TEXT TO ANYLYZE"/>
    <Footer link="TextUtils" year="2024"/>
    

    </>
  );
}

export default App;
