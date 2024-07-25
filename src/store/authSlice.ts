import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("auth-token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem("auth-token", action.payload);
      } else {
        localStorage.removeItem("auth-token");
      }
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
