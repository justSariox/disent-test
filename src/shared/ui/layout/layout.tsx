import { Flex, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { CustomHeader } from "@/shared/ui";
import s from './layout.module.scss';


export const CustomLayout = () => {
    return (
        <Flex gap='middle' wrap>
            <Layout className={s.layout}>
                <CustomHeader/>
                <Content className={s.content}>
                    <Outlet />
                </Content>
            </Layout>
        </Flex>
    )
}