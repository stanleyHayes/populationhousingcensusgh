import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ENUMERATORS_API} from "../../../api/enumerators.api.js";

const initialState = {
    loading: false,
    error: null,
    enumerators: [],
    enumerator: null
}

const createEnumerator = createAsyncThunk('enumerators/createEnumerator', async ({enumerator}, thunkApi) => {
    try {
        const response = await ENUMERATORS_API.createEnumerator(enumerator);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});

const getEnumerator = createAsyncThunk('enumerators/getEnumerator', async ({id}, thunkApi) => {
    try {
        const response = await ENUMERATORS_API.getEnumerator(id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const getEnumerators = createAsyncThunk('enumerators/getEnumerators', async ({
                                                                           id,
                                                                           type_of_enumerator,
                                                                           outer_wall_material,
                                                                           floor_material,
                                                                           geographical_area_id
                                                                       }, thunkApi) => {
    try {
        const response = await ENUMERATORS_API.getEnumerators(id, type_of_enumerator, outer_wall_material, floor_material, geographical_area_id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const updateEnumerator = createAsyncThunk('enumerators/updateEnumerator', async ({id, enumerator}, thunkApi) => {
    try {
        const response = await ENUMERATORS_API.updateEnumerator(id, enumerator);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const deleteEnumerator = createAsyncThunk('enumerators/deleteEnumerator', async ({id}, thunkApi) => {
    try {
        const response = await ENUMERATORS_API.deleteEnumerator(id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const enumeratorsSlice = createSlice({
    name: 'enumerators',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createEnumerator.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(createEnumerator.fulfilled, (state, action) => {
            state.enumerators = [action.payload, ...state.enumerators];
            state.loading = false;
            state.error = null;
        }).addCase(createEnumerator.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getEnumerators.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getEnumerators.fulfilled, (state, action) => {
            state.enumerators = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(getEnumerators.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getEnumerator.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getEnumerator.fulfilled, (state, action) => {
            state.enumerator = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(getEnumerator.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(updateEnumerator.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(updateEnumerator.fulfilled, (state, action) => {
            state.enumerators = state.enumerators.map(enumerator => {
                if (enumerator.id === action.payload.id) {
                    return action.payload
                }
                return enumerator
            });
            state.loading = false;
            state.error = null;
        }).addCase(updateEnumerator.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(deleteEnumerator.pending, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(deleteEnumerator.fulfilled, (state, action) => {
            state.enumerators = state.enumerators.filter(enumerator => enumerator.id !== action.payload.id);
            state.loading = false;
            state.error = null;
        }).addCase(deleteEnumerator.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});


const {reducer} = enumeratorsSlice;

export const selectEnumerators = state => state.enumerators;
export const ENUMERATORS_ACTION_CREATORS = {deleteEnumerator, updateEnumerator, createEnumerator, getEnumerator, getEnumerators}

export default reducer;