import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    religions: [
        {
            name: 'No Religion',
            code: '01'
        },
        {
            name: 'Catholic',
            code: '02'
        },
        {
            name: 'Protestant (Anglican, Lutheran, Presbyterian, Methodist, etc)',
            code: '03'
        },
        {
            name: 'Pentecostal/Charismatic',
            code: '04'
        },
        {
            name: 'Other Christian',
            code: '05'
        },
        {
            name: 'Islam',
            code: '06'
        },
        {
            name: 'Ahmadi',
            code: '07'
        },
        {
            name: 'Traditionalist',
            code: '08'
        },
        {
            name: 'Other (Specify)',
            code: '09'
        }
    ]
}

const religionsSlice = createSlice({
    name: 'religions',
    initialState,
    reducers: {}
});


const {reducer} = religionsSlice;

export const selectReligions = state => state.religions;

export default reducer;