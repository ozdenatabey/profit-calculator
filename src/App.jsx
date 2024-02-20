import { useState } from "react";
import "./App.css";

function App() {
  return (
    <body>
      <header id="header">
        <img src="src/assets/invenstment.png" alt="investing" />
        <h1>Profit Calculator App</h1>
      </header>
      <div className="input-group" id="input-container">
        <form>
          <label>Entry Price</label>
          <br />
          <input placeholder="Enter price" type="text" />
        </form>
        <form>
          <label>Goal Profit</label>
          <br />
          <input placeholder="Enter daily profit %" type="text" />
        </form>
        <form>
          <label>Date Range</label>
          <br />
          <input placeholder="Enter number of days" type="text" />
        </form>
      </div>
    </body>
  );
}
export default App;
