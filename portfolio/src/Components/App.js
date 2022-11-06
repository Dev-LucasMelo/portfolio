import './App.css';
import About from './about/about';
import Home from './home/home';
import Menu from './menu/menu';
import Contact from './Contact-component/Contactcomp';
import Scrolltop from './Scrolltop/scrolltop';


function App() {

  window.addEventListener("scroll", () => {
    const buttonscroll = document.getElementById("scroll")
    const textfooter = document.getElementById("text")
    const tela = window.scrollY

    if (tela > textfooter.getBoundingClientRect().top) {
      buttonscroll.classList.remove("displayevent")
    } else {
      buttonscroll.classList.add("displayevent")
    }

  })
  return (
    <>
      <Menu />
      <Home />
      <About />
      <Contact />
      <Scrolltop />
    </>
  );
}

export default App;
