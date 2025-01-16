import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {FORMER_HOUSEHOLD_MEMBERS_API} from "../../../api/emigrated-households.api.js";

const initialState = {
    loading: false,
    error: null,
    emigratedHouseholdMembers: [],
    emigratedHouseholdMember: null
}

const createEmigratedHousehold = createAsyncThunk('emigratedHouseholdMembers/createEmigratedHousehold', async ({emigratedHouseholdMember}, thunkApi) => {
    try {
        const response = await FORMER_HOUSEHOLD_MEMBERS_API.createEmigratedHousehold(emigratedHouseholdMember);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});

const getEmigratedHousehold = createAsyncThunk('emigratedHouseholdMembers/getEmigratedHousehold', async ({id}, thunkApi) => {
    try {
        const response = await FORMER_HOUSEHOLD_MEMBERS_API.getEmigratedHousehold(id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const getEmigratedHouseholds = createAsyncThunk('emigratedHouseholdMembers/getEmigratedHouseholds', async ({
                                                                           id,
                                                                           type_of_emigratedHouseholdMember,
                                                                           outer_wall_material,
                                                                           floor_material,
                                                                           geographical_area_id
                                                                       }, thunkApi) => {
    try {
        const response = await FORMER_HOUSEHOLD_MEMBERS_API.getEmigratedHouseholds(id, type_of_emigratedHouseholdMember, outer_wall_material, floor_material, geographical_area_id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const updateEmigratedHousehold = createAsyncThunk('emigratedHouseholdMembers/updateEmigratedHousehold', async ({id, emigratedHouseholdMember}, thunkApi) => {
    try {
        const response = await FORMER_HOUSEHOLD_MEMBERS_API.updateEmigratedHousehold(id, emigratedHouseholdMember);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const deleteEmigratedHousehold = createAsyncThunk('emigratedHouseholdMembers/deleteEmigratedHousehold', async ({id}, thunkApi) => {
    try {
        const response = await FORMER_HOUSEHOLD_MEMBERS_API.deleteEmigratedHousehold(id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const emigratedHouseholdMembersSlice = createSlice({
    name: 'emigratedHouseholdMembers',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createEmigratedHousehold.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(createEmigratedHousehold.fulfilled, (state, action) => {
            state.emigratedHouseholdMembers = [action.payload, ...state.emigratedHouseholdMembers];
            state.loading = false;
            state.error = null;
        }).addCase(createEmigratedHousehold.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getEmigratedHouseholds.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getEmigratedHouseholds.fulfilled, (state, action) => {
            state.emigratedHouseholdMembers = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(getEmigratedHouseholds.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getEmigratedHousehold.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getEmigratedHousehold.fulfilled, (state, action) => {
            state.emigratedHouseholdMember = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(getEmigratedHousehold.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(updateEmigratedHousehold.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(updateEmigratedHousehold.fulfilled, (state, action) => {
            state.emigratedHouseholdMembers = state.emigratedHouseholdMembers.map(emigratedHouseholdMember => {
                if (emigratedHouseholdMember.id === action.payload.id) {
                    return action.payload
                }
                return emigratedHouseholdMember
            });
            state.loading = false;
            state.error = null;
        }).addCase(updateEmigratedHousehold.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(deleteEmigratedHousehold.pending, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(deleteEmigratedHousehold.fulfilled, (state, action) => {
            state.emigratedHouseholdMembers = state.emigratedHouseholdMembers.filter(emigratedHouseholdMember => emigratedHouseholdMember.id !== action.payload.id);
            state.loading = false;
            state.error = null;
        }).addCase(deleteEmigratedHousehold.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});


const {reducer} = emigratedHouseholdMembersSlice;

export const selectEmigratedHouseholdMembers = state => state.emigratedHouseholdMembers;
export const EMIGRATED_HOUSEHOLD_MEMBERS_ACTION_CREATORS = {deleteEmigratedHousehold, updateEmigratedHousehold, createEmigratedHousehold, getEmigratedHousehold, getEmigratedHouseholds}

export default reducer;