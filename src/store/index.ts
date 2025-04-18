import { PayloadAction, configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { Company, State } from "../react-app-env";

enum ActionType {
    SET_COMPANIES = 'SET_COMPANIES',
};

const initialState:State = {
    companies: [],
};

export const setCompanies = createAction<Company[]>(ActionType.SET_COMPANIES);

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(setCompanies, (state, action:PayloadAction<Company[]>) => {
        state.companies = action.payload;
    });
});

export const store = configureStore({
    reducer,
});