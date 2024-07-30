import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {App} from "@/app";

import '@/app/styles/index.scss'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)