import { Layout, Typography } from "antd";
import { Link } from "react-router-dom";
import s from './header.module.scss'

const { Header } = Layout

export const CustomHeader = () => {
    return (
        <Header className={s.header}>

            <Link to='/'>
                <Typography.Paragraph className={s.title}>Disent test app</Typography.Paragraph>
            </Link>

        </Header>
    )
}