import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    ghanaRegions: [
        {
            name: 'Western',
            code: '01'
        },
        {
            name: 'Central',
            code: '02'
        },
        {
            name: 'Greater Accra',
            code: '03'
        },
        {
            name: 'Volta',
            code: '04'
        },
        {
            name: 'Eastern',
            code: '05'
        },
        {
            name: 'Ashanti',
            code: '06'
        },
        {
            name: 'Brong Ahafo',
            code: '07'
        },
        {
            name: 'Northern',
            code: '08'
        },
        {
            name: 'Upper East',
            code: '09'
        },
        {
            name: 'Upper West',
            code: '10'
        },
    ],
    regions: [
        {
            name: 'Western',
            code: '01'
        },
        {
            name: 'Central',
            code: '02'
        },
        {
            name: 'Greater Accra',
            code: '03'
        },
        {
            name: 'Volta',
            code: '04'
        },
        {
            name: 'Eastern',
            code: '05'
        },
        {
            name: 'Ashanti',
            code: '06'
        },
        {
            name: 'Brong Ahafo',
            code: '07'
        },
        {
            name: 'Northern',
            code: '08'
        },
        {
            name: 'Upper East',
            code: '09'
        },
        {
            name: 'Upper West',
            code: '10'
        },
        {
            name: 'Nigeria',
            code: '11'
        },
        {
            name: 'Liberia',
            code: '12'
        }, {
            name: 'Sierra Leone',
            code: '13'
        },
        {
            name: 'Gambia',
            code: '14'
        }, {
            name: 'Togo',
            code: '15'
        },
        {
            name: 'Burkina Faso',
            code: '16'
        }, {
            name: "Cote d'Ivoire",
            code: '17'
        },
        {
            name: 'Other ECOWAS states',
            code: '18'
        }, {
            name: 'Africa, Other than ECOWAS',
            code: '19'
        },
        {
            name: 'Europe',
            code: '20'
        }, {
            name: 'Americas (North, South/ Caribbean)',
            code: '21'
        },
        {
            name: 'Asia',
            code: '22'
        }, {
            name: 'Oceania',
            code: '23'
        },
    ]
}

const regionsSlice = createSlice({
    name: 'regions',
    initialState,
    reducers: {}
});


const {reducer} = regionsSlice;

export const selectRegions = state => state.regions;

export default reducer;