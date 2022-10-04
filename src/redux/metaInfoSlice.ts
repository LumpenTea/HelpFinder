import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { login, MetaInfoInterface, userInterface, } from "./types";

const searchLink: string = '/search/find';

const metaInfoState: MetaInfoInterface = {
    isLogin: false,
    buyerRadio: true,
    specialistRadio: false,
    link: searchLink,
    message: '',
    messageColor: 'text-success',
    users: []
}

const metaInfoSlice = createSlice({
    name: 'metaInfo',
    initialState: metaInfoState,
    reducers: {
        logInAction(state, action: PayloadAction<login>) {
            const userCheck = state.users.find(user => user.username === action.payload.username && user.password === action.payload.password)
            if (userCheck) {
                state.isLogin = true;
                state.currentUser = userCheck;
            } else {
                state.message = 'Username or password is incorrect';
                state.messageColor = 'text-danger';
            }
        },
        logOutAction(state) {
            state.isLogin = false;
        },
        initUsers(state) {
            if (localStorage.getItem('users')) {
                const users = JSON.parse(localStorage.getItem('users')!);
                state.users = users;
            }
        },
        registerAction(state, action: PayloadAction<userInterface>) {
            state.users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')!) : [];
            if (action.payload.password === action.payload.repeatedPassword) {
                if (state.users.find(user => user.username === action.payload.username)) {
                    state.message = 'This user is already exist';
                    state.messageColor = 'text-danger';
                } else {
                    state.users.push(action.payload);
                    localStorage.setItem('users', JSON.stringify(state.users));
                    state.message = 'Register succsed';
                    state.messageColor = 'text-success';
                }
            } else {
                state.message = 'Incorrect repeating of password';
                state.messageColor = 'text-danger';
            }
        },
        cleanScreenMessage(state) {
            state.message = '';
        }
    }
})

export const entranceReducer = metaInfoSlice.reducer;
export const { logInAction, logOutAction, initUsers, registerAction, cleanScreenMessage } = metaInfoSlice.actions;