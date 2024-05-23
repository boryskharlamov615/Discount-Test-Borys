import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DiscountState {
  selectedOption: string;
  discountCode: string;
  notes: string;
}

const initialState: DiscountState = {
  selectedOption: 'Option A',
  discountCode: '',
  notes: ''
};

const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
    setNotes: (state, action: PayloadAction<string>) => {
      state.notes = action.payload;
    }
  }
});

export const { setSelectedOption, setNotes } = discountSlice.actions;

export default discountSlice.reducer;