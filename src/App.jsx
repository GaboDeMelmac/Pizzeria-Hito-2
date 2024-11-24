import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/CSS/styles.css";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        {/* <Header></Header> */}
        {/* <Home></Home> */}
        {/* <Register></Register> */}
        <Login></Login>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
