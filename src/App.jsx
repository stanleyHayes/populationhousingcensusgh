import {lazy, Suspense} from 'react'
import './App.css'
import {Route, Routes, useLocation} from "react-router";
import {useSelector} from "react-redux";
import {selectUI} from "./redux/features/ui/ui-slice.js";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {darkTheme, lightTheme} from "./utils/theme.js";
const LoginPage = lazy(() => import('./pages/authentication/login-page.jsx'));
const RegistrationPage = lazy(() => import('./pages/authentication/register-page.jsx'));
const ForgotPasswordPage = lazy(() => import('./pages/authentication/forgot-password-page.jsx'));
const ResetPasswordPage = lazy(() => import('./pages/authentication/reset-password-page.jsx'));

const SettingsPage = lazy(() => import('./pages/settings/settings-page.jsx'));
const HouseholdsPage = lazy(() => import('./pages/household/households-page.jsx'));
const CreateHouseholdsPage = lazy(() => import('./pages/household/create-household-page.jsx'));
const HouseholdDetailPage = lazy(() => import('./pages/household/household-detail-page.jsx'));

const NotFoundPage = lazy(() => import('./pages/404/not-found-page.jsx'));

function App() {

    const location = useLocation()
    const {variant} = useSelector(selectUI);

    return (
        <ThemeProvider theme={variant === 'dark' ? darkTheme : lightTheme}>
            <CssBaseline enableColorScheme={true}/>
            <Routes location={location}>
                <Route
                    path="/auth/login"
                    element={
                        <Suspense fallback={null}>
                            <LoginPage/>
                        </Suspense>
                    }
                />
                <Route
                    path="/auth/register"
                    element={
                        <Suspense fallback={null}>
                            <RegistrationPage/>
                        </Suspense>
                    }
                />
                     <Route
                    path="/auth/forgot-password"
                    element={
                        <Suspense fallback={null}>
                            <ForgotPasswordPage/>
                        </Suspense>
                    }
                />

                <Route
                path="/auth/reset-password"
                element={
                    <Suspense fallback={null}>
                        <ResetPasswordPage/>
                    </Suspense>
                }
            />

                <Route
                    path="/settings"
                    element={
                        <Suspense fallback={null}>
                            <SettingsPage/>
                        </Suspense>
                    }
                />

                <Route
                    path="/"
                    element={
                        <Suspense fallback={null}>
                            <HouseholdsPage/>
                        </Suspense>
                    }
                />

                <Route
                    path="/households/:id"
                    element={
                        <Suspense fallback={null}>
                            <HouseholdDetailPage/>
                        </Suspense>
                    }
                />

                <Route
                    path="/household/new"
                    element={
                        <Suspense fallback={null}>
                            <CreateHouseholdsPage/>
                        </Suspense>
                    }
                />

                <Route
                    path="*"
                    element={
                        <Suspense fallback={null}>
                            <NotFoundPage/>
                        </Suspense>
                    }
                />
            </Routes>
        </ThemeProvider>
    )
}


export default App
