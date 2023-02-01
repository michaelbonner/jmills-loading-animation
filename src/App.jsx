import Lottie from "lottie-react";
import jmeAnimation from "./animations/JME_Logo_White_V2.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "20vw",
          height: "20vw",
        }}
      >
        <Lottie animationData={jmeAnimation} loop={true} />
      </div>
    </div>
  );
}

export default App;
