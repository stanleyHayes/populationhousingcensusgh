import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    nationalities: [
        {
            name: 'Ghanaian by birth',
            code: '01'
        },
        {
            name: 'Dual Nationality',
            code: '02'
        },
        {
            name: 'Ghanaian by naturalisation',
            code: '03'
        },
        {
            name: 'Nigerian',
            code: '04'
        },
        {
            name: 'Liberian',
            code: '05'
        },
        {
            name: 'Sierra Leonean',
            code: '06'
        },
        {
            name: 'Gambian',
            code: '07'
        },
        {
            name: 'Togolese',
            code: '08'
        },
        {
            name: 'Burkinabe',
            code: '09'
        },
        {
            name: 'Ivorian',
            code: '10'
        },

        {
            name: 'Other ECOWAS states',
            code: '11'
        }, {
            name: 'Africa, Other than ECOWAS',
            code: '12'
        },
        {
            name: 'European',
            code: '13'
        }, {
            name: 'Americas (North, South/ Caribbean)',
            code: '14'
        },
        {
            name: 'Asia',
            code: '15'
        }, {
            name: 'Oceanian (incl. Australian and New Zealander)',
            code: '16'
        },
    ]
}

const nationalitiesSlice = createSlice({
    name: 'nationalities',
    initialState,
    reducers: {}
});


const {reducer} = nationalitiesSlice;

export const selectNationalities = state => state.nationalities;

export default reducer;