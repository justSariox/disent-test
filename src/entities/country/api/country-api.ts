import { instance } from "@/shared/api/base-api.ts";
import { Country } from "@/entities/country/model/country-types.ts";


const countryApi = {
    getCountries() {
        return instance.get<Country[]>('all')
    },
    getCountry(name: string) {
      return instance.get<Country>(`name/${name}`)
    }
}

export const { getCountries, getCountry } = countryApi