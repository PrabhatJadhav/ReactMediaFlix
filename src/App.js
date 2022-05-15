import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Footer from "./Components/Footer";
import "../src/WebsiteMain.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// Animation:-
// Duration only for type tween
// Stifness only for type spring
// initial={{ x: "100vw" }}
// animate={{ x: 0 }}
// transition={{ type: "spring" }}

/* <SignIn trigger={signInButton} setTrigger={setButtonPopUp} />
  const [signInButton, setButtonPopUp] = useState(false); */
