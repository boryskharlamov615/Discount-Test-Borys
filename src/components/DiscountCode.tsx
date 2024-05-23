import React, { useState } from 'react';
import HelperText from './HelperText';

const DiscountCode = () => {

  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState('');

  // Check if the code is valid.
  // Used the sample regexp to test right now. Can update this in real logic.
  const validate = (code: string) => {
    return /^2024$/.test(code);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    if (validate(event.target.value) || !event.target.value.length ) {
        setError('');
    }else{
      setError('The code you entered is invalid');
    }

};

  const generateCode = () => {
    const newCode = 'MOCK-CODE-NEWCODE123';
    alert(`Generated Discount Code: ${newCode}`);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2">Enter Discount Code:</label>
      <input
        type="text"
        className="form-input mt-1 block w-full"
        value={inputValue}
        onChange={handleChange}
        placeholder="eg: DISCOUNT2024"
      />
      <HelperText isError={Boolean(error)} message={error} />
      <button
        onClick={generateCode}
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate Code
      </button>
    </div>
  );
};

export default DiscountCode;