import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DWELLINGS_API} from "../../../api/dwellings.api.js";

const initialState = {
    loading: false,
    error: null,
    dwellings: [],
    dwelling: null
}

const createDwelling = createAsyncThunk('dwellings/createDwelling', async ({dwelling}, thunkApi) => {
    try {
        const response = await DWELLINGS_API.createDwelling(dwelling);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});

const getDwelling = createAsyncThunk('dwellings/getDwelling', async ({id}, thunkApi) => {
    try {
        const response = await DWELLINGS_API.getDwelling(id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const getDwellings = createAsyncThunk('dwellings/getDwellings', async ({
                                                                           id,
                                                                           type_of_dwelling,
                                                                           outer_wall_material,
                                                                           floor_material,
                                                                           geographical_area_id
                                                                       }, thunkApi) => {
    try {
        const response = await DWELLINGS_API.getDwellings(id, type_of_dwelling, outer_wall_material, floor_material, geographical_area_id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const updateDwelling = createAsyncThunk('dwellings/updateDwelling', async ({id, dwelling}, thunkApi) => {
    try {
        const response = await DWELLINGS_API.updateDwelling(id, dwelling);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const deleteDwelling = createAsyncThunk('dwellings/deleteDwelling', async ({id}, thunkApi) => {
    try {
        const response = await DWELLINGS_API.deleteDwelling(id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const dwellingsSlice = createSlice({
    name: 'dwellings',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createDwelling.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(createDwelling.fulfilled, (state, action) => {
            state.dwellings = [action.payload, ...state.dwellings];
            state.loading = false;
            state.error = null;
        }).addCase(createDwelling.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getDwellings.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getDwellings.fulfilled, (state, action) => {
            state.dwellings = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(getDwellings.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getDwelling.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getDwelling.fulfilled, (state, action) => {
            state.dwelling = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(getDwelling.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(updateDwelling.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(updateDwelling.fulfilled, (state, action) => {
            state.dwellings = state.dwellings.map(dwelling => {
                if (dwelling.id === action.payload.id) {
                    return action.payload
                }
                return dwelling
            });
            state.loading = false;
            state.error = null;
        }).addCase(updateDwelling.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(deleteDwelling.pending, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(deleteDwelling.fulfilled, (state, action) => {
            state.dwellings = state.dwellings.filter(dwelling => dwelling.id !== action.payload.id);
            state.loading = false;
            state.error = null;
        }).addCase(deleteDwelling.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});


const {reducer} = dwellingsSlice;

export const selectDwellings = state => state.dwellings;
export const DWELLINGS_ACTION_CREATORS = {deleteDwelling, updateDwelling, createDwelling, getDwelling, getDwellings}

export default reducer;