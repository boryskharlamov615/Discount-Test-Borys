import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setSelectedOption } from '../features/discount/discountSlice';

const RadioButtons: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.discount.selectedOption);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedOption(event.target.value));
  };

  return (
    <div className="mb-4">
      <label className="block mb-2">Select an option:</label>
      <div>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="option"
            value="Option A"
            checked={selectedOption === 'Option A'}
            onChange={handleChange}
          />
          <span className="ml-2">Option A</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="option"
            value="Option B"
            checked={selectedOption === 'Option B'}
            onChange={handleChange}
          />
          <span className="ml-2">Option B</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="option"
            value="Option C"
            checked={selectedOption === 'Option C'}
            onChange={handleChange}
          />
          <span className="ml-2">Option C</span>
        </label>
      </div>
    </div>
  );
};

export default RadioButtons;