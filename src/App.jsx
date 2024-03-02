import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    entryPrice: 1000,
    goal: 2,
    duration: 30,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <Inputs onChange={handleChange} userInput={userInput}/>
      <Results input={userInput}/>
    </>
  );
}
export default App;
