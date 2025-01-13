import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    codes: [
        {
            name: 'Head',
            code: '01'
        },
        {
            name: 'Spouse (Wife/Husband)',
            code: '02'
        },
        {
            name: 'Child (Son/Daughter)',
            code: ' 03'
        },
        {
            name: 'Parent/Parent in-law',
            code: '04'
        },
        {
            name: 'Son/Daughter in-law',
            code: '05'
        },
        {
            name: 'Grandchild',
            code: ' 06'
        },
        {
            name: 'Brother/Sister',
            code: ' 07'
        },
        {
            name: 'Step child',
            code: '08'
        },
        {
            name: 'Foster child',
            code: '09'
        },
        {
            name: 'Other relative',
            code: '10'
        },
        {
            name: 'Non-relative',
            code: '11'
        }
    ]
}

const relationshipCodesSlice = createSlice({
    name: 'relationshipCodes',
    initialState,
    reducers: {}
});


const {reducer} = relationshipCodesSlice;

export const selectRelationshipCodes = state => state.relationshipCodes;

export default reducer;