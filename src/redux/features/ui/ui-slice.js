import {createSlice} from "@reduxjs/toolkit";
import {POPULATION_HOUSING_CENSUS_CONSTANTS} from "../../../utils/constants.js";

const initialState = {
    variant: 'dark',
    drawerOpen: false,
    sidebarOpen: true,
    title: '',
    subtitle: '',
    language: 'en-GH',
    currency: 'USD',
    locale: 'en-US',
    network: '',
    ip: '',
    country: '',
    view: 'table'
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleVariant: (state) => {
            console.log(state.variant);
            state.variant = state.variant === 'light' ? 'dark' : 'light';
            localStorage.setItem(
                POPULATION_HOUSING_CENSUS_CONSTANTS.POPULATION_HOUSING_CENSUS_THEME_VARIANT_KEY,
                JSON.stringify(state.variant)
            )
        },
        toggleDrawerOpen: (state, action) => {
            state.drawerOpen = action.payload;
        },
        toggleView: (state, action) => {
            state.view = action.payload;
        },
        toggleSidebarOpen: (state, action) => {
            state.sidebarOpen = action.payload;
            localStorage.setItem(
                POPULATION_HOUSING_CENSUS_CONSTANTS.POPULATION_HOUSING_CENSUS_THEME_VARIANT_KEY,
                JSON.stringify(state.sidebarOpen)
            )
        },
        setSubtitle: (state, action) => {
            state.subtitle = action.payload;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        selectLanguage: (state, action) => {
            state.siteLanguage = action.payload;
            localStorage.setItem(
                POPULATION_HOUSING_CENSUS_CONSTANTS.POPULATION_HOUSING_CENSUS_LANGUAGE,
                JSON.stringify(state.siteLanguage)
            )
        }
    }
});

export const {toggleDrawerOpen, toggleSidebarOpen, toggleVariant, setSubtitle, setTitle, selectLanguage, toggleView} = uiSlice.actions;
export const selectUI = state => state.ui;
const reducer = uiSlice.reducer;
export default reducer;