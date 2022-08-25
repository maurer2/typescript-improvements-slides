import React, { useState, useId, FormEvent, MouseEvent } from "react";

// https://stackoverflow.com/questions/69612540/typescript-type-to-prevent-division-by-0
// type NumberWithoutZero<T extends number> = T extends 0 ? never : number extends T ? never : T;

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
    calculateQuotient();
  }

  function calculateQuotient(): void {
    setQuotient(operand1 / operand2);
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
