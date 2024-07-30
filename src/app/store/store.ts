import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {countryReducer} from "@/entities/country/model/country-slice.ts";

const rootReducer = combineReducers({
    countries: countryReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch