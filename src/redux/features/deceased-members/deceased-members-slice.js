import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DECEASED_HOUSEHOLD_MEMBERS_API} from "../../../api/deceased-households.api.js";

const initialState = {
    loading: false,
    error: null,
    deceasedMembers: [],
    deceasedMember: null
}

const createDeceasedHousehold = createAsyncThunk('deceasedMembers/createDeceasedHousehold', async ({deceasedMember}, thunkApi) => {
    try {
        const response = await DECEASED_HOUSEHOLD_MEMBERS_API.createDeceasedHousehold(deceasedMember);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});

const getDeceasedHousehold = createAsyncThunk('deceasedMembers/getDeceasedHousehold', async ({id}, thunkApi) => {
    try {
        const response = await DECEASED_HOUSEHOLD_MEMBERS_API.getDeceasedHousehold(id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const getDeceasedHouseholds = createAsyncThunk('deceasedMembers/getDeceasedHouseholds', async ({
                                                                           id,
                                                                           type_of_deceasedMember,
                                                                           outer_wall_material,
                                                                           floor_material,
                                                                           geographical_area_id
                                                                       }, thunkApi) => {
    try {
        const response = await DECEASED_HOUSEHOLD_MEMBERS_API.getDeceasedHouseholds(id, type_of_deceasedMember, outer_wall_material, floor_material, geographical_area_id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const updateDeceasedHousehold = createAsyncThunk('deceasedMembers/updateDeceasedHousehold', async ({id, deceasedMember}, thunkApi) => {
    try {
        const response = await DECEASED_HOUSEHOLD_MEMBERS_API.updateDeceasedHousehold(id, deceasedMember);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const deleteDeceasedHousehold = createAsyncThunk('deceasedMembers/deleteDeceasedHousehold', async ({id}, thunkApi) => {
    try {
        const response = await DECEASED_HOUSEHOLD_MEMBERS_API.deleteDeceasedHousehold(id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const deceasedMembersSlice = createSlice({
    name: 'deceasedMembers',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createDeceasedHousehold.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(createDeceasedHousehold.fulfilled, (state, action) => {
            state.deceasedMembers = [action.payload, ...state.deceasedMembers];
            state.loading = false;
            state.error = null;
        }).addCase(createDeceasedHousehold.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getDeceasedHouseholds.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getDeceasedHouseholds.fulfilled, (state, action) => {
            state.deceasedMembers = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(getDeceasedHouseholds.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getDeceasedHousehold.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getDeceasedHousehold.fulfilled, (state, action) => {
            state.deceasedMember = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(getDeceasedHousehold.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(updateDeceasedHousehold.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(updateDeceasedHousehold.fulfilled, (state, action) => {
            state.deceasedMembers = state.deceasedMembers.map(deceasedMember => {
                if (deceasedMember.id === action.payload.id) {
                    return action.payload
                }
                return deceasedMember
            });
            state.loading = false;
            state.error = null;
        }).addCase(updateDeceasedHousehold.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(deleteDeceasedHousehold.pending, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(deleteDeceasedHousehold.fulfilled, (state, action) => {
            state.deceasedMembers = state.deceasedMembers.filter(deceasedMember => deceasedMember.id !== action.payload.id);
            state.loading = false;
            state.error = null;
        }).addCase(deleteDeceasedHousehold.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});


const {reducer} = deceasedMembersSlice;

export const selectDeceasedHouseholds = state => state.deceasedMembers;
export const DECEASED_HOUSEHOLD_MEMBERS_ACTION_CREATORS = {deleteDeceasedHousehold, updateDeceasedHousehold, createDeceasedHousehold, getDeceasedHousehold, getDeceasedHouseholds}

export default reducer;