import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PERSONS_API} from "../../../api/persons.api.js";

const initialState = {
    loading: false,
    error: null,
    persons: [],
    person: null
}

const createPerson = createAsyncThunk('persons/createPerson', async ({person}, thunkApi) => {
    try {
        const response = await PERSONS_API.createPerson(person);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});

const getPerson = createAsyncThunk('persons/getPerson', async ({id}, thunkApi) => {
    try {
        const response = await PERSONS_API.getPerson(id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const getPersons = createAsyncThunk('persons/getPersons', async ({
                                                                                                   id,
                                                                                                   type_of_person,
                                                                                                   outer_wall_material,
                                                                                                   floor_material,
                                                                                                   geographical_area_id
                                                                                               }, thunkApi) => {
    try {
        const response = await PERSONS_API.getPersons(id, type_of_person, outer_wall_material, floor_material, geographical_area_id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const updatePerson = createAsyncThunk('persons/updatePerson', async ({id, person}, thunkApi) => {
    try {
        const response = await PERSONS_API.updatePerson(id, person);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const deletePerson = createAsyncThunk('persons/deletePerson', async ({id}, thunkApi) => {
    try {
        const response = await PERSONS_API.deletePerson(id);

        return response.data;
    } catch (e) {
        const error = e.message;
        thunkApi.rejectWithValue(error);
    }
});


const personsSlice = createSlice({
    name: 'persons',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createPerson.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(createPerson.fulfilled, (state, action) => {
            state.persons = [action.payload, ...state.persons];
            state.loading = false;
            state.error = null;
        }).addCase(createPerson.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getPersons.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getPersons.fulfilled, (state, action) => {
            state.persons = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(getPersons.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getPerson.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getPerson.fulfilled, (state, action) => {
            state.person = action.payload;
            state.loading = false;
            state.error = null;
        }).addCase(getPerson.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(updatePerson.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(updatePerson.fulfilled, (state, action) => {
            state.persons = state.persons.map(person => {
                if (person.id === action.payload.id) {
                    return action.payload
                }
                return person
            });
            state.loading = false;
            state.error = null;
        }).addCase(updatePerson.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(deletePerson.pending, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(deletePerson.fulfilled, (state, action) => {
            state.persons = state.persons.filter(person => person.id !== action.payload.id);
            state.loading = false;
            state.error = null;
        }).addCase(deletePerson.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});


const {reducer} = personsSlice;

export const selectPersons = state => state.persons;
export const GEOGRAPHICAL_AREAS_ACTION_CREATORS = {deletePerson, updatePerson, createPerson, getPerson, getPersons}

export default reducer;