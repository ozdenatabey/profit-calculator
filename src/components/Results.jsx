import { calculate } from "../../util/Calculation";
export default function Results({ input }) {
  console.log(calculate(input));
  return <p>Results...</p>;
}
