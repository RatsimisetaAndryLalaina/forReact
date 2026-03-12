import { configureStore } from '@reduxjs/toolkit';
import userStore from './user/user';

const store = configureStore({
    reducer: {
        user: userStore,
    },
});

export default store;