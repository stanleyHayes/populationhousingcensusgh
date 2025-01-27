import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    fisheriesLivestockCodes: [
        { "activity": "Beehives", "code": "01" },
        { "activity": "Cattle", "code": "02" },
        { "activity": "Chicken", "code": "03" },
        { "activity": "Dove", "code": "04" },
        { "activity": "Duck", "code": "05" },
        { "activity": "Goat", "code": "06" },
        { "activity": "Grass-cutter", "code": "07" },
        { "activity": "Guinea fowl", "code": "08" },
        { "activity": "Ostrich", "code": "09" },
        { "activity": "Pig", "code": "10" },
        { "activity": "Rabbit", "code": "11" },
        { "activity": "Sheep", "code": "12" },
        { "activity": "Silk worm", "code": "13" },
        { "activity": "Snail", "code": "14" },
        { "activity": "Turkey", "code": "15" },
        { "activity": "Other (specify)", "code": "16" },
        { "activity": "None", "code": "17" },
        { "activity": "Fish farming", "code": "18" },
        { "activity": "Inland fishing", "code": "19" },
        { "activity": "Marine fishing", "code": "20" },
        { "activity": "None", "code": "21" }
    ]
}

const fisheriesLivestockCodesSlice = createSlice({
    name: 'fisheriesLivestockCodes',
    initialState,
    reducers: {}
});


const {reducer} = fisheriesLivestockCodesSlice;

export const selectFisheriesLivestockCodes = state => state.fisheriesLivestockCodes;

export default reducer;