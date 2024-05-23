import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setNotes } from '../features/discount/discountSlice';

const Notes: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.discount.notes);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNotes(event.target.value));
  };

  return (
    <div className="mb-4">
      <label className="block mb-2">Notes:</label>
      <textarea
        className="form-textarea mt-1 block w-full"
        rows={3}
        value={notes}
        onChange={handleChange}
        placeholder="Enter your notes here..."
      ></textarea>
    </div>
  );
};

export default Notes;