import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./tasksReducer";
import userPreferencesReducer from './userPreferencesSlice';
import uiStateReducer from './uiStateSlice';

// Combine reducers into Root reducer

const rootReducer = combineReducers({
    tasks: tasksReducer,
    userPreferences: userPreferencesReducer,
    uiState: uiStateReducer,
});

export default rootReducer;