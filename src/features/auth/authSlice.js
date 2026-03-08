import { createSlice } from '@reduxjs/toolkit';

// អានទិន្នន័យពី localStorage ពេលចាប់ផ្ដើមកម្មវិធី
const storedToken = localStorage.getItem('token');
const storedUser = localStorage.getItem('user');

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken || null,
  isAuthenticated: !!storedToken,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, userId, email, displayName } = action.payload;
      state.token = token;
      state.user = { id: userId, email, displayName };
      state.isAuthenticated = true;
      
      // រក្សាទុកក្នុង localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify({ id: userId, email, displayName }));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      
      // លុបចេញពី localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;