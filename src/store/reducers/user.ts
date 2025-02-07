import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  admin: boolean;
};

const initialState: UserState = {
  admin: false,
};

const CACHE_ID: string = 'IM_CACHE_USER';

const hydrateInitialState = (): UserState => {
  const admin = localStorage.getItem(CACHE_ID);
  if (admin !== null) {
    return {
      admin: JSON.parse(admin) as boolean,
    };
  } else {
    return initialState;
  }
};
const userSlice = createSlice({
  name: 'user',
  initialState: hydrateInitialState(),
  reducers: {
    setAdmin(state, action: PayloadAction<boolean>) {
      state.admin = action.payload;
      localStorage.setItem(CACHE_ID, JSON.stringify(action.payload));
    },
  },
});

export const { setAdmin } = userSlice.actions;

export default userSlice.reducer;
