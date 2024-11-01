import React, { useRef } from 'react';

function Addtion()
 {
  // Using useRef to hold references to each input field and result fields
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const sumRef = useRef(null);

  // Function to calculate the sum and average
  const calculateResults = () => {
    // Get values from refs and parse them as numbers with fallback values
    const a = parseInt(num1Ref.current.value);
    const b = parseInt(num2Ref.current.value);

    // Calculate sum and average
    const sum = a + b;

    // Display results in read-only input fields
    sumRef.current.value = sum;
  };

  return (
    <>
      <h1> Addition of Two numbers</h1>
      <input ref={num1Ref} type="number" placeholder="Enter first number" />
      <input ref={num2Ref} type="number" placeholder="Enter second number" />

      <button onClick={calculateResults}>Calculate</button>
      
      <input ref={sumRef} type="text" placeholder="Sum of two" readOnly />
    </>
  );
}

export default Addtion;
