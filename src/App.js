import { useState , useEffect } from "react";
import pauseMobile from "./images/pattern-divider-mobile.svg";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg"
function App() {
  const [text , setText] = useState([])

  const fetchAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    //console.log(data.slip)
    setText(data.slip)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className="container">
      <h1>Advice {text.id}</h1>
      <p>
        {text.advice}
      </p>

      <picture>
        <source media="(min-width : 768px)" srcSet={pauseDesktop}/>
        <img src={pauseMobile}/>
      </picture>

      <div>
        <button onClick={fetchAdvice}>
          <img src={dice}/>
        </button>
      </div>
    </div>
  );
}

export default App;
