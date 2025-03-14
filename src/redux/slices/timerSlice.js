import {createSlice} from '@reduxjs/toolkit';
import {generateInitialId, incrementLastPart} from '../../utils/helper';

const initialState = {
  timeLeft: 30,
  randomId: generateInitialId(),
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    decrementTime: state => {
      if (state.timeLeft === 1) {
        state.randomId = incrementLastPart(state.randomId);
        state.timeLeft = 30;
      } else {
        state.timeLeft -= 1;
      }
    },
    resetTimer: state => {
      state.timeLeft = 30;
    },
  },
});

export const {decrementTime, resetTimer} = timerSlice.actions;
export default timerSlice.reducer;
