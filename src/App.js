import Navbar from "./components/Navbar/navbar.tsx";
import Intro from "./components/Intro/intro.tsx";
import Skills from "./components/Skills/skills.tsx";
import About from "./components/About/about.tsx";
import MyContact from "./components/MyContact/myContact.tsx"
import Contact from "./components/ Contact/contact.tsx";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" style="position:fixed top:0"/>
      <Intro className="introNavbar"/>
      <About className="about"></About>
      <Contact className="contact"></Contact>
      <MyContact className="myContact"></MyContact>
      {/* <Skills /> */}
    </div>
  );
}

export default App;
