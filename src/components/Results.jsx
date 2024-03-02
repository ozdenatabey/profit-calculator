import { calculate, formatter } from "../../util/Calculation";
export default function Results({ input }) {
  const resultsData = calculate(input);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Days</th>
          <th>Daily Earn</th>
          <th>Total Profit</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((resultsData) => {
          return (
            <tr key={resultsData.day}>
              <td>{resultsData.day}</td>
              <td>{formatter.format(resultsData.dailyEarn)}</td>
              <td>{formatter.format(resultsData.totalEarn)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
