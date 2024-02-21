export default function Inputs({ onChange, userInput }) {
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
          onChange={(event) => onChange("entryPrice", event.target.value)}
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
          onChange={(event) => onChange("goal", event.target.value)}
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
          onChange={(event) => onChange("duration", event.target.value)}
        />
      </form>
    </div>
  );
}
