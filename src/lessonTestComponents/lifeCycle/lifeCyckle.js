import {useEffect, useLayoutEffect, useState} from "react";
import Button from "../../components/button/button";
import Child from "./child";

const LifeCycle = (props) => {
  const [ showChild, setShowChild ] = useState(true);
  const [ value, setValue ] = useState('1');
  const [ total, setTotal ] = useState(0);

  useEffect(() => {
    console.log('Use effect')
    setValue('3');
  }, [])

  // useLayoutEffect(() => {
  //   console.log('useLayoutEffect');
  //
  //   setValue('2');
  // }, []);

  return (
    <div style={{ height: '1000px' }}>
      <Button onClick={() => { setShowChild(!showChild) }}>Show/Hide child</Button>
      { showChild && <Child /> }
      value: { value }



      { console.log('Render') }
    </div>
  )
}

export default LifeCycle;
