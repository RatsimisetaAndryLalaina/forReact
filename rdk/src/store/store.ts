import { configureStore } from '@reduxjs/toolkit';
import userStore from './user/user';
import articleStore from './article/article';

const store = configureStore({
  reducer: {
    user: userStore,
    article: articleStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;