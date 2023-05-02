import "./App.scss";
import Card from "./components/card/card.component";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Card />
      </div>
      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          <span>Frontend Mentor</span>
        </a>
        . Coded by{" "}
        <a
          href="https://www.keithanoellouis.com"
          target="_blank"
          rel="noreferrer"
        >
          <span>Keitha Noel-Louis</span>
        </a>
        .
      </div>
    </div>
  );
}

export default App;
