import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CustomLayout} from "@/shared/ui/layout/layout.tsx";

import {CountriesPage} from "@/pages/countries-page/countries-page.tsx";
import {CountryPage} from "@/pages/country-page/country-page.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <CustomLayout />,
        children: [
            {
                path: '/',
                element: <CountriesPage />
            },
            {
                path: '/country/:name',
                element: <CountryPage />
            },
            {
                path: '*',
                element: <div>not found</div>
            }
        ]
    }
])

export const Router = () => {
    return <RouterProvider router={router} />
}