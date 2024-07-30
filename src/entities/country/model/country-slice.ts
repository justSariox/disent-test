import { createAppAsyncThunk } from "@/app/lib/utils/create-app-async-thunk.ts";
import { Country } from "@/entities/country/model/country-types.ts";
import { getCountries, getCountry } from "@/entities/country/api/country-api.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/store.ts";

type InitialStateType = {
    countries: Country[],
    selectedCountry?: Country;
    error?: string;
};

const initialState: InitialStateType = {
    countries: [],
    selectedCountry: undefined,
    error: undefined,
};

export const fetchCountries = createAppAsyncThunk<Country[], void>(
    'countries/fetchCountries',
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await getCountries();
            return res.data;
        } catch (e) {
            return rejectWithValue('something went wrong');
        }
    }
);

export const fetchCountry = createAppAsyncThunk<Country, string>(
    'countries/fetchCountry',
    async (arg, thunkAPI) => {
        const { rejectWithValue  } = thunkAPI;
        try {
            const res = await getCountry(arg);
            return res.data;
        } catch (e) {
            return rejectWithValue('something went wrong');
        }
    }
);


const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        d: () => {}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.fulfilled, (state: RootState, action: PayloadAction<Country[]>) => {
            state.countries = action.payload;
            state.error = undefined;
        });
        builder.addCase(fetchCountry.fulfilled, (state: RootState, action: PayloadAction<Country>) => {
            state.selectedCountry = action.payload;
            state.error = undefined;
        });
        builder.addCase(fetchCountries.rejected, (state: RootState, action) => {
            state.error = action.payload as string;
        });
        builder.addCase(fetchCountry.rejected, (state: RootState, action) => {
            state.error = action.payload as string;
        });
    }
});

export const countryReducer = countriesSlice.reducer;
export const countryThunks = { fetchCountries, fetchCountry };
