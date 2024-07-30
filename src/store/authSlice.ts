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
      state.token = action.payload; // ставим новое значение токена
      if (action.payload) {
        // если ответ есть записываем в локал сторедж
        localStorage.setItem("auth-token", action.payload);
      } else {
        localStorage.removeItem("auth-token");
      }
    },
    // удаляем токен
    removeToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
