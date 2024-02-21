import { useState } from "react";

export default function Inputs() {
  const [userInput, setUserInput] = useState({
    entryPrice: 1000,
    goal: 2,
    duration: 30,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <div className="input-group" id="input-container">
      <form>
        <label>Entry Price</label>
        <br />
        <input
          placeholder="Enter price"
          type="number"
          required
          value={userInput.entryPrice}
          onChange={(event) => handleChange("entryPrice", event.target.value)}
        />
      </form>
      <form>
        <label>Goal Profit</label>
        <br />
        <input
          placeholder="Enter daily profit %"
          type="number"
          required
          value={userInput.goal}
          onChange={(event) => handleChange("goal", event.target.value)}
        />
      </form>
      <form>
        <label>Duration</label>
        <br />
        <input
          placeholder="Enter number of days"
          type="number"
          required
          value={userInput.duration}
          onChange={(event) => handleChange("duration", event.target.value)}
        />
      </form>
    </div>
  );
}
