import { configureStore } from '@reduxjs/toolkit';

import teamReducer from './teamSlice';

const store = configureStore({
    reducer: teamReducer
});

export default store;
