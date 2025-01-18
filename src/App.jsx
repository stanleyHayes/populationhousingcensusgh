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

const HouseholdMembersPage = lazy(() => import('./pages/household-members/household-members-page.jsx'));
const NewHouseholdMemberPage = lazy(() => import('./pages/household-members/new-household-member-page.jsx'));
const EnumeratorsPage = lazy(() => import('./pages/enumerators/enumerators-page.jsx'));
const EmigratedMembersPage = lazy(() => import('./pages/emigrated-members/emigrated-members-page.jsx'));
const GeographicalAreasPage = lazy(() => import('./pages/geographical-areas/geographical-areas-page.jsx'));
const DwellingsPage = lazy(() => import('./pages/dwellings/dwellings-page.jsx'));
const DeceasedMembersPage = lazy(() => import('./pages/deceased-members/deceased-members-page.jsx'));

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
                    path="/people"
                    element={
                        <Suspense fallback={null}>
                            <HouseholdMembersPage/>
                        </Suspense>
                    }
                />



                <Route
                    path="/enumerators"
                    element={
                        <Suspense fallback={null}>
                            <EnumeratorsPage/>
                        </Suspense>
                    }
                />




                <Route
                    path="/emigrated-members"
                    element={
                        <Suspense fallback={null}>
                            <EmigratedMembersPage/>
                        </Suspense>
                    }
                />



                <Route
                    path="/dwellings"
                    element={
                        <Suspense fallback={null}>
                            <DwellingsPage/>
                        </Suspense>
                    }
                />




                <Route
                    path="/deceased-members"
                    element={
                        <Suspense fallback={null}>
                            <DeceasedMembersPage/>
                        </Suspense>
                    }
                />



                <Route
                    path="/geographical-areas"
                    element={
                        <Suspense fallback={null}>
                            <GeographicalAreasPage/>
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
                    path="/household-member/new"
                    element={
                        <Suspense fallback={null}>
                            <NewHouseholdMemberPage/>
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
