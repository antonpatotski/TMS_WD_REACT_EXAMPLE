import withCounter from "../../HOC/withCounter";
import Button from "../../components/button/button";
import useCounter from "../../hooks/useCounter";

function HoverIncrease(props) {
  const { counter, incrementCounter } = useCounter();

  return (
    <div>
      <Button onClick={() => incrementCounter()}>Increment counter</Button>
      <p> Value of 'counter' in HoverIncrease: {counter}</p>
    </div>
  );
}
// export default withCounter(HoverIncrease);
export default HoverIncrease;
