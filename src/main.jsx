import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router";
import {Provider} from "react-redux";
import store from "./redux/app/store.js";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n/i18n.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <I18nextProvider i18n={i18n}>
                        <App/>
                    </I18nextProvider>
                </LocalizationProvider>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
