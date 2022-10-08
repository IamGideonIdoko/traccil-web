import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  user: string;
  isRadioSelected: boolean;
}

const initialState: IUser = {
  user: '',
  isRadioSelected: true,
};

const userTypeSlice = createSlice({
  name: 'usertype',
  initialState,
  reducers: {
    userType: (state, { payload }: { payload: string }) => {
      state.user = payload;
      state.isRadioSelected = false;
    },
  },
});

export const { userType } = userTypeSlice.actions;

export default userTypeSlice.reducer;
