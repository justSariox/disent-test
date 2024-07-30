import { RootState } from "@/app/store/store.ts";

export const countries = (state: RootState) => state.countries.countries
export const selectedCountry = (state: RootState) => state.countries.selectedCountry

export const fetchError = (state: RootState) => state.countries.error