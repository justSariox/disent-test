export interface Country {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Record<string, Currency>;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Record<string, string>;
    translations: Record<string, Translation>;
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Image;
    coatOfArms: Image;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
}

export interface Name {
    common: string;
    official: string;
    nativeName: Record<string, Translation>;
}

export interface Currency {
    name: string;
    symbol: string;
}

export interface Idd {
    root: string;
    suffixes: string[];
}

export interface Translation {
    official: string;
    common: string;
}

export interface Demonyms {
    eng: Gender;
    fra: Gender;
}

export interface Gender {
    f: string;
    m: string;
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Car {
    signs: string[];
    side: string;
}

export interface Image {
    png: string;
    svg: string;
    alt: string;
}

export interface CapitalInfo {
    latlng: number[];
}
