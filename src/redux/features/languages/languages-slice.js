import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    languages: [
        {
            "code": "1",
            "name": "None (not literate)"
        },
        {
            "code": "2",
            "name": "English only"
        },
        {
            "code": "3",
            "name": "Ghanaian language only"
        },
        {
            "code": "4",
            "name": "English and Ghanaian language"
        },
        {
            "code": "5",
            "name": "English and French"
        },
        {
            "code": "6",
            "name": "English, French and Ghanaian language"
        },
        {
            "code": "7",
            "name": "Other (Specify)"
        },
    ]

}

const languagesSlice = createSlice({
    name: 'languages',
    initialState,
    reducers: {}
});


const {reducer} = languagesSlice;

export const selectLanguages = state => state.languages;

export default reducer;