import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GEOGRAPHICAL_AREA_API} from "../../../api/geographic-areas.api.js";

const initialState = {
    loading: false,
    error: null,
    geographicalAreas: [],
    geographicalArea: null
}

const createGeographicalArea = createAsyncThunk('geographicalAreas/createGeographicalArea', async ({geographicalArea}, thunkApi) => {
    try {
        const response = await GEOGRAPHICAL_AREA_API.createGeographicalArea(geographicalArea);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});

const getGeographicalArea = createAsyncThunk('geographicalAreas/getGeographicalArea', async ({id}, thunkApi) => {
    try {
        const response = await GEOGRAPHICAL_AREA_API.getGeographicalArea(id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const getGeographicalAreas = createAsyncThunk('geographicalAreas/getGeographicalAreas', async ({
                                                                           id,
                                                                           type_of_geographicalArea,
                                                                           outer_wall_material,
                                                                           floor_material,
                                                                           geographical_area_id
                                                                       }, thunkApi) => {
    try {
        const response = await GEOGRAPHICAL_AREA_API.getGeographicalAreas(id, type_of_geographicalArea, outer_wall_material, floor_material, geographical_area_id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const updateGeographicalArea = createAsyncThunk('geographicalAreas/updateGeographicalArea', async ({id, geographicalArea}, thunkApi) => {
    try {
        const response = await GEOGRAPHICAL_AREA_API.updateGeographicalArea(id, geographicalArea);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const deleteGeographicalArea = createAsyncThunk('geographicalAreas/deleteGeographicalArea', async ({id}, thunkApi) => {
    try {
        const response = await GEOGRAPHICAL_AREA_API.deleteGeographicalArea(id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const geographicalAreasSlice = createSlice({
    name: 'geographicalAreas',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createGeographicalArea.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(createGeographicalArea.fulfilled, (state, action) => {
            state.geographicalAreas = [action.payload, ...state.geographicalAreas];
            state.loading = false;
            state.error = null;
        }).addCase(createGeographicalArea.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getGeographicalAreas.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getGeographicalAreas.fulfilled, (state, action) => {
            state.geographicalAreas = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(getGeographicalAreas.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getGeographicalArea.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getGeographicalArea.fulfilled, (state, action) => {
            state.geographicalArea = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(getGeographicalArea.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(updateGeographicalArea.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(updateGeographicalArea.fulfilled, (state, action) => {
            state.geographicalAreas = state.geographicalAreas.map(geographicalArea => {
                if (geographicalArea.id === action.payload.id) {
                    return action.payload
                }
                return geographicalArea
            });
            state.loading = false;
            state.error = null;
        }).addCase(updateGeographicalArea.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(deleteGeographicalArea.pending, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(deleteGeographicalArea.fulfilled, (state, action) => {
            state.geographicalAreas = state.geographicalAreas.filter(geographicalArea => geographicalArea.id !== action.payload.id);
            state.loading = false;
            state.error = null;
        }).addCase(deleteGeographicalArea.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});


const {reducer} = geographicalAreasSlice;

export const selectGeographicalAreas = state => state.geographicalAreas;
export const GEOGRAPHICAL_AREAS_ACTION_CREATORS = {deleteGeographicalArea, updateGeographicalArea, createGeographicalArea, getGeographicalArea, getGeographicalAreas}

export default reducer;