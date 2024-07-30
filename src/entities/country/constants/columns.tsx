import {TableProps, Tag} from "antd";
import { Country, Image, Name } from "@/entities/country/model/country-types.ts";
import {Link} from "react-router-dom";




export const CountriesColumns: TableProps<Country>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 125,
        render: (_, record) => <span>{record.name.common}</span>

    },
    {
        title: 'Capital',
        dataIndex: 'capital',
        key: 'capital',
        width: 125,
        render: (_, record) => <span>{record.capital ? record.capital[0] : '-'}</span>
    },
    {
        title: 'Flags',
        dataIndex: 'flags',
        key: 'flags',
        width: 125,
        render: (_, record) => <img width={30} height={30} src={record.flags.png} alt={record.flags.alt}/>
    },
    {
        title: 'Languages',
        dataIndex: 'languages',
        key: 'languages',
        width: 125,
        render: (_, record) => record.languages ? Object.values(record.languages).map(l => <Tag>{l}</Tag>) : '-'
    },
    {
        title: 'Area',
        dataIndex: 'area',
        key: 'area',
        width: 125,
        render: (_, record) => <span>{record.area }</span>
    },
    {
        title: 'Population',
        dataIndex: 'population',
        key: 'population',
        width: 125,
        render: (_, record) => <span>{record.population }</span>
    },
    {
        title: 'Action',
        key: 'action',
        width: 125,
        render: (_, record) => <Link to={`/country/${record.name.common}`}>Read more...</Link>
    }
]