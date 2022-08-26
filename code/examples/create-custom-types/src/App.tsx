import React, { useState, useId, FormEvent, MouseEvent } from "react";

import calculateQuotient from "./util/calculate-percentage";

function App() {
  const [operand1, setOperand1] = useState<number>(0);
  const [operand2, setOperand2] = useState<number>(0);
  const [quotient, setQuotient] = useState<number>(0);
  const slider1: string = useId();
  const slider2: string = useId();

  function handleChange(event: FormEvent<HTMLInputElement>): void {
    const { id, valueAsNumber } = event.currentTarget;

    if (id === slider1) {
      setOperand1(valueAsNumber);
      return;
    }
    setOperand2(valueAsNumber);
  }

  function handleSubmit(event: MouseEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (operand1 === 0 ) {
      setQuotient(0);
    }

    const newQuotient = calculateQuotient(operand1, operand2);
    // const newQuotient = operand1 / operand2;
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
              onChange={handleChange}
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
              onChange={handleChange}
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
