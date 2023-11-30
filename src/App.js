import Navbar from "./components/Navbar/navbar.tsx";
import Intro from "./components/Intro/intro.tsx";
import Skills from "./components/Skills/skills.tsx";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar"/>
      <Intro className="introNavbar"/>
      <Skills />
    </div>
  );
}

export default App;
