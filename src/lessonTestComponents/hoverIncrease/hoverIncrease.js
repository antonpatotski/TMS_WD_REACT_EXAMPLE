import { useState } from "react";

import withCounter from "../../HOC/withCounter";
import Button from "../../components/button/button";

function HoverIncrease(props) {
  const { counter, incrementCounter } = props;
  return (
    <div>
      <Button onClick={() => incrementCounter()}>Increment counter</Button>
      <p> Value of 'counter' in HoverIncrease: {counter}</p>
    </div>
  );
}
export default withCounter(HoverIncrease);
