import React, { useState, useId, type SubmitEvent } from 'react';

import calculateQuotient from './util/calculate-percentage/calculate-percentage.ts';

// pre 4.8
// type ToNumber<T extends string> = T extends `${infer T extends number}`? T: never
// type SliderNames_Old<T extends PropertyKey> = T extends number ? `text${T}` : never

// 4.8+ String literal types
type SliderNames<T extends number> = `slider${T}`;

function App() {
  const [operand1, setOperand1] = useState<number>(0);
  const [operand2, setOperand2] = useState<number>(0);
  const [quotient, setQuotient] = useState<number>(0);
  const slider1: string = useId();
  const slider2: string = useId();

  const handleChange =
    (slider: string) =>
    // FormEvent is deprecated as of 19.2: https://github.com/remix-run/react-router/issues/14795
    (event: SubmitEvent<HTMLInputElement>): void => {
      const { valueAsNumber } = event.currentTarget;

      if (slider === slider1) {
        setOperand1(valueAsNumber);
        return;
      }
      setOperand2(valueAsNumber);
    };

  // FormEvent is deprecated as of 19.2: https://github.com/remix-run/react-router/issues/14795
  function handleSubmit(event: SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (operand1 === 0) {
      setQuotient(0);
    }

    const newQuotient = calculateQuotient(operand1, operand2);
    setQuotient(newQuotient);
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Operands</legend>
          <div>
            <label htmlFor={slider1}>Operand 1</label>
            <input
              type="range"
              value={operand1}
              id={slider1}
              name={slider1}
              min="0"
              max="100"
              step={0.01}
              onChange={handleChange(slider1)}
            />
            <output htmlFor={slider1}>{operand1}</output>
          </div>
          <div>
            <label htmlFor={slider2}>Operand 2</label>
            <input
              type="range"
              value={operand2}
              id={slider2}
              name={slider2}
              min="0"
              max="10"
              step={0.01}
              onChange={handleChange(slider2)}
            />
            <output htmlFor={slider2}>{operand2}</output>
          </div>
        </fieldset>
        <fieldset>
          <legend>Quotient</legend>
          <div>
            <output htmlFor={`${slider1} ${slider2}`}>{quotient.toFixed(2)}</output>
          </div>
          <button type="submit">Calculate quotient</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
