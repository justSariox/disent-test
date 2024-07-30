import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "@/app";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchCountry, fetchError, selectedCountry } from "@/entities";
import { Button, Typography, Card, Alert } from "antd";
import { CompassOutlined, EnvironmentOutlined, LeftOutlined, TeamOutlined } from "@ant-design/icons";
import s from './country-page.module.scss'

export const CountryPage = () => {
    const { name } = useParams()
    const dispatch = useAppDispatch()
    const error = useSelector(fetchError)
    const country = useSelector(selectedCountry)

    useEffect(() => {
        dispatch(fetchCountry(name))
    }, [])

    return (
        <div className={s.countryPage}>
            <div className={s.pageTitle}>
                <Button className={s.backBtn} icon={<LeftOutlined />} type="link"> <Link to="/">Back</Link></Button>
                <Typography.Title className={s.title}>{name} Info Page</Typography.Title>
            </div>
            <Card className={s.card}>
                {country?.map(c => {
                    return (
                        <div className={s.cardContent}>
                            <div className={s.countryName}>
                                <Typography.Title level={3}>{c.name.common}</Typography.Title>
                                <img src={c.flags.png} alt={c.flags.alt}/>
                            </div>
                            <div className={s.countryInfo}>
                                <div className={s.capital}>
                                    <EnvironmentOutlined className={s.icon}/>
                                    <Typography.Text>{c.capital[0]}</Typography.Text>
                                </div>
                                <div className={s.population}>
                                    <TeamOutlined className={s.icon}/>
                                    <Typography.Text>{c.population}</Typography.Text>
                                </div>
                                <div className={s.area}>
                                    <CompassOutlined className={s.icon}/>
                                    <Typography.Text>{c.area}</Typography.Text>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Card>
            {error && <Alert message={error} type="error" closable/>}

        </div>
    )
}