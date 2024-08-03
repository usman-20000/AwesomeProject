// usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = {
          ...state.users[index],
          ...action.payload,
        };
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
