import { useAppDispatch } from "@/app";
import { useSelector } from "react-redux";
import { countries, CountriesColumns, fetchCountries } from "@/entities";
import { useEffect } from "react";
import { Table } from "antd";

export const CountriesPage = () => {
    const dispatch = useAppDispatch()
    const countriesList = useSelector(countries)
    console.log(countriesList)

    useEffect(() => {
        dispatch(fetchCountries())
    }, [])

    return <Table dataSource={countriesList} columns={CountriesColumns}/>
}