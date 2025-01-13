import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    educationalLevels: [
        {
            "code": "01",
            "name": "Nursery"
        },
        {
            "code": "02",
            "name": "Kindergarten"
        },
        {
            "code": "03",
            "name": "Primary"
        },
        {
            "code": "04",
            "name": "JSS/JHS"
        },
        {
            "code": "05",
            "name": "Middle"
        },
        {
            "code": "06",
            "name": "SSS/SHS"
        },
        {
            "code": "07",
            "name": "Secondary"
        },
        {
            "code": "08",
            "name": "Voc/technical/commercial"
        },
        {
            "code": "09",
            "name": "Post middle/secondary certificate (teacher training/college of education, agric, nursing, etc)"
        },
        {
            "code": "10",
            "name": "Post secondary Diploma (University diploma, HND, teacher training/college of education diploma, etc)"
        },
        {
            "code": "11",
            "name": "Bachelor degree"
        },
        {
            "code": "12",
            "name": "Post graduate (Cert., Diploma, Masters, PHD, etc)"
        }
    ]

}

const educationalLevelsSlice = createSlice({
    name: 'educationalLevels',
    initialState,
    reducers: {}
});


const {reducer} = educationalLevelsSlice;

export const selectEducationalLevels = state => state.educationalLevels;

export default reducer;