import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  name?: string,
  secondName?: string,
  birthday?: string,
  phone?: string,
  email?: string
  avatar?: string
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    secondName: '',
    birthday: '',
    phone: '',
    email: '',
    avatar: ''
  } as UserState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSecondName: (state, action) => {
      state.secondName = action.payload;
    },
    setBirthday: (state, action) => {
      state.birthday = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setUserInfo: (state, action) => {
      state.name = action.payload?.name;
      state.email = action.payload?.email;
      state.phone = action.payload?.phone;
      state.birthday = action.payload?.birthday;
      state.secondName = action.payload?.secondName;
      state.avatar = action.payload?.avatar;
    }
  }
});

export const { setName, setSecondName, setEmail, setPhone, setBirthday, setAvatar, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
