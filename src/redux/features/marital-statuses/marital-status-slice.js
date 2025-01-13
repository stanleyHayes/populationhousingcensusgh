import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    maritalStatuses: [
        {
            name: 'Never Married',
            code: '1'
        },
        {
            name: 'Informal/consensual union living together',
            code: '2'
        },
        {
            name: 'Married',
            code: '3'
        },
        {
            name: 'Separated',
            code: '4'
        },
        {
            name: 'Divorced',
            code: '5'
        },
        {
            name: 'Widowed',
            code: '6'
        },
    ]
}

const maritalStatusesSlice = createSlice({
    name: 'maritalStatuses',
    initialState,
    reducers: {}
});


const {reducer} = maritalStatusesSlice;

export const selectMaritalStatuses = state => state.maritalStatuses;

export default reducer;