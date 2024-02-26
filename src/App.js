import "./App.css";

import Dash from "./Components/Dashboard/Dash";
import Nav from "./Components/Navbar/Nav";
import About from "./Components/About/About";
import Community from "./Components/Community/Community";
import Purchase from "./Components/Purchase/Purchase";
function App() {
  return (
    <>
      <Nav />
      <Purchase />
      <About />
      <Community />
    </>
  );
}

export default App;
