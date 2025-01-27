import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    cropCodes: [
        {"activity": "Agro forestry (tree planting)", "code": "01"},
        {"activity": "Alligator pepper", "code": "02"},
        {"activity": "Apples", "code": "03"},
        {"activity": "Asian vegetables (e.g. tinda, cauliflower)", "code": "04"},
        {"activity": "Avocado", "code": "05"},
        {"activity": "Banana", "code": "06"},
        {"activity": "Beans", "code": "07"},
        {"activity": "Black pepper", "code": "08"},
        {"activity": "Black berries", "code": "09"},
        {"activity": "Cabbage", "code": "10"},
        {"activity": "Carrot", "code": "11"},
        {"activity": "Cashew", "code": "12"},
        {"activity": "Cassava", "code": "13"},
        {"activity": "Citronella", "code": "14"},
        {"activity": "Citrus", "code": "15"},
        {"activity": "Cloves", "code": "16"},
        {"activity": "Cocoa", "code": "17"},
        {"activity": "Coconut", "code": "18"},
        {"activity": "Cocoyam", "code": "19"},
        {"activity": "Cocoyam / Taro (kooko)", "code": "20"},
        {"activity": "Coffee", "code": "21"},
        {"activity": "Cola", "code": "22"},
        {"activity": "Cotton", "code": "23"},
        {"activity": "Cucumber", "code": "24"},
        {"activity": "Egg plant", "code": "25"},
        {"activity": "Gallic", "code": "26"},
        {"activity": "Garden eggs", "code": "27"},
        {"activity": "Ginger", "code": "28"},
        {"activity": "Groundnut", "code": "29"},
        {"activity": "Guava", "code": "30"},
        {"activity": "Kenaf", "code": "31"},
        {"activity": "Lemon grass", "code": "32"},
        {"activity": "Lettuce", "code": "33"},
        {"activity": "Maize", "code": "34"},
        {"activity": "Mango", "code": "35"},
        {"activity": "Melon (agusi)", "code": "36"},
        {"activity": "Millet", "code": "37"},
        {"activity": "Mushroom", "code": "38"},
        {"activity": "Nut meg", "code": "39"},
        {"activity": "Oil palm", "code": "40"},
        {"activity": "Okro", "code": "41"},
        {"activity": "Onion", "code": "42"},
        {"activity": "Pawpaw", "code": "43"},
        {"activity": "Peas", "code": "44"},
        {"activity": "Pepper", "code": "45"},
        {"activity": "Pineapple", "code": "46"},
        {"activity": "Plantain", "code": "47"},
        {"activity": "Potatoes", "code": "48"},
        {"activity": "Rice", "code": "49"},
        {"activity": "Rubber", "code": "50"},
        {"activity": "Shallot", "code": "51"},
        {"activity": "Shea tree", "code": "52"},
        {"activity": "Sorghum", "code": "53"},
        {"activity": "Soya beans", "code": "54"},
        {"activity": "Spinach", "code": "55"},
        {"activity": "Sugarcane", "code": "56"},
        {"activity": "Sun flower", "code": "57"},
        {"activity": "Sweet pepper", "code": "58"},
        {"activity": "Sweet potatoes", "code": "59"},
        {"activity": "Tiger nut", "code": "60"},
        {"activity": "Tobacco", "code": "61"},
        {"activity": "Tomatoes", "code": "62"},
        {"activity": "Water melon", "code": "63"},
        {"activity": "Yam", "code": "64"},
        {"activity": "Other (specify)", "code": "65"},
        {"activity": "None", "code": "66"}
    ]
}

const cropCodesSlice = createSlice({
    name: 'cropCodes',
    initialState,
    reducers: {}
});


const {reducer} = cropCodesSlice;

export const selectCropCodes = state => state.cropCodes;

export default reducer;