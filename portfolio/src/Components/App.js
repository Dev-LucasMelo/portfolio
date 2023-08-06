import './App.css';
import About from './about/about';
import Home from './home/home';
import Menu from './menu/menu';
import Contact from './Contact-component/Contactcomp';
import Scrolltop from './Scrolltop/scrolltop';

const App = () => {

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
  //ARRAY OPS
  const ops = [
    {
      "id": 1,
      "op": "about",
      "href": "#about-component"
    },
    {
      "id": 2,
      "op": "Contact",
      "href": "#contact"
    },
  ]

  return (
    <>
      <Menu ops={ops} />
      <Home />
      <About />
      <Contact />
      <Scrolltop />
    </>
  );
}

export default App;
