import {useCallback, useEffect, useMemo, useState} from "react";
import withCounter from "../../HOC/withCounter";
import Button from "../../components/button/button";

function ClickIncrease(props) {
  const { counter, incrementCounter } = props;
  const [ isEven, setIsEven ] = useState(false);

  useEffect(() => {
    const newValue = isEven % 2 === 0;

    if (isEven !== newValue) {
      setIsEven(newValue)
    }
  }, [ counter ])

  const isEven2 = useMemo(() => {
    const newValue = isEven % 2 === 0;

    return newValue;
  }, [ counter ]);

  const onBtnClick = useCallback(() => {
    console.log('On click', counter);
  }, [ counter ]);

  return (
    <div>
      <Button onClick={incrementCounter}>Increment counter</Button>
      <p> Value of 'counter' in ClickIncrease: {counter}</p>
      <p> Is value Even: { String(isEven) }</p>
      <p> Is value Even2: { String(isEven2) }</p>

      <Button onClick={onBtnClick}>Test click</Button>
    </div>
  );
}
export default withCounter(ClickIncrease);
