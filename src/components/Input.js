import { useState } from 'react';
import '../App.css'
import * as d3 from 'd3'


d3.selectAll('input').style('width', '3%')
export default function Input() {
  const [array, setArray] = useState({
    firstValue: 0,
    secondValue: 0,
    thirdValue: 0,
    forthValue: 0,
    fifthValue: 0,
    sixthValue: 0
  });
  const [color, setBarColor]= useState('yellow')

  

  function handleFirstValueChange(e) {
    setArray({
      ...array,
      firstValue: e.target.value
    });
  }

  function handleSecondValueChange(e) {
    setArray({
      ...array,
      secondValue: e.target.value
    });
  }
  function handleThirdValueChange(e) {
     setArray({
       ...array,
       thirdValue: e.target.value
     });
   }
   function handleForthValueChange(e) {
     setArray({
       ...array,
       forthValue: e.target.value
     });
   }
   function handleFifthValueChange(e) {
     setArray({
       ...array,
       fifthValue: e.target.value
     });
   }
   function handleSixthValueChange(e) {
     setArray({
       ...array,
       sixthValue: e.target.value
     });
   }
   

  function handleColorChange(e) {
    setArray({
      ...array,
      color: e.target.value
    });
  }



  return (
    <>
      <label>
        1:
        <input style={{width: '2%'}}
          value={array.firstValue}
          onChange={handleFirstValueChange}
        />
      </label>
      <label>
        2:
        <input
          value={array.secondValue}
          onChange={handleSecondValueChange}
        />
      </label>

      <label>
        3:
        <input
          value={array.thirdValue}
          onChange={handleThirdValueChange}
        />
      </label>
      <label>
        4:
        <input
          value={array.forthValue}
          onChange={handleForthValueChange}
        />
      </label>

      <label>
        5:
        <input
          value={array.fifthValue}
          onChange={handleFifthValueChange}
        />
      </label>
      <label>
        6:
        <input
          value={array.sixthValue}
          onChange={handleSixthValueChange}
        />
      </label>
      <label>
        color:
        <input
          value={array.color}
          onChange={handleColorChange}
        />
      </label>
      <button style={{'color': 'pink'}}>Button</button>
      <p>
        {array.firstValue}{' '}
        {array.secondValue}{' '}
        {array.thirdValue}{' '}
        {array.forthValue}{' '}
        {array.fifthValue}{' '}
        {array.sixthValue}{' '}
        ({array.color})
      </p>
    </>
  );
}
