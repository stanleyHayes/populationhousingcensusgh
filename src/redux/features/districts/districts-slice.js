import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    districts: [
        {
            name: 'Jomoro',
            type: 'District',
            code: '0101',
            capital: 'Half-Assini',
            region: "Western"
        },
        {
            name: 'Ellembelle  District ',
            type: 'District',
            code: '0102',
            capital: 'Nkroful'
        },
        {
            name: 'Nzema East   ',
            type: 'Municipal',
            code: '0103',
            capital: 'Axim'
        },
        {
            name: 'Ahanta West',
            type: 'District',
            code: '0104',
            capital: 'Agona-Nkwanta'
        },
        {
            name: 'Sekondi-Takoradi',
            type: 'Metropolitan',
            code: '0105',
            capital: 'Sekondi'
        },
        {
            name: 'Shama',
            type: 'District',
            code: '0106',
            capital: 'Shama'
        },
        {
            name: 'Mpohor-Wassa East',
            type: 'District',
            code: '0107',
            capital: 'Daboase'
        },
        {
            name: 'Tarkwa Nsuaem',
            type: 'Municipal',
            code: '0108',
            capital: 'Tarkwa'
        },
        {
            name: 'Prestea / Huni Valley',
            type: 'District',
            code: '0109',
            capital: 'Bogoso'
        },
        {
            name: 'Wassa Amenfi East',
            type: 'District',
            code: '0110',
            capital: 'Wassa-Akropong'
        },
        {
            name: 'Wassa Amenfi West',
            type: 'District',
            code: '0111',
            capital: 'Asankragwa'
        },
        {
            name: 'Aowin / Suaman',
            type: 'District',
            code: '0112',
            capital: 'Enchi'
        },
        {
            name: 'Sefwi-Akontombra',
            type: 'District',
            code: '0113',
            capital: 'Sefwi-Akontombra'
        },
        {
            name: 'Sefwi-Wiawso',
            type: 'District',
            code: '0114',
            capital: 'Sefwi-Wiawso'
        },
        {
            name: 'Sefwi-Bibiani-Ahwiaso-Bekwai',
            type: 'District',
            code: '0115',
            capital: 'Bibiani'
        },
        {
            name: 'Juabeso',
            type: 'District',
            code: '0116',
            capital: 'Juabeso'
        },
        {
            name: 'Bia',
            type: 'District',
            code: '0117',
            capital: 'Essam-Debiso'
        }
    ]
}

const districtsSlice = createSlice({
    name: 'districts',
    initialState,
    reducers: {}
});


const {reducer} = districtsSlice;

export const selectDistricts = state => state.districts;

export default reducer;