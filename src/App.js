import qrcode from "./image-qr-code.png";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <img src={qrcode} className="qr-code" alt="logo" />
        <div className="text-container">
          <h3>Improve your front-end skills by building projects</h3>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <p>hello</p>
      <div class="attribution">
        Challenge by 
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
           Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.keithanoellouis.com"
          target="_blank"
          rel="noreferrer"
        >
          Keitha Noel-Louis
        </a>
        .
      </div>
    </div>
  );
}

export default App;
