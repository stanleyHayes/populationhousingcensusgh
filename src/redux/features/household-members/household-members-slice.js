import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PERSONS_API} from "../../../api/persons.api.js";
import PropTypes from "prop-types";

const initialState = {
    loading: false,
    error: null,
    persons: [],
    person: null,
    fertility: {
        born_alive_past_12_months: {
            male: 1,
            female: 0,
        },
        surviving: {
            male: 2,
            female: 1,
        },
        birth: {
            male: 2,
            female: 1,
        }
    },
    ict: {
        has_phone: true,
        has_internet: true,
    },
    roster: {
        name: 'Stanley Hayford',
        relationship_to_head: 'Son/Daughter',
        relationship_code: '02',
        sex: 'Male',
        status: 'A',
    },
    demography: {
        age: 31,
        birthplace: "Central",
        born_in_village: true,
        dob: "1993-08-29T00:00:00.000Z",
        ethnicity: "Fante",
        ethnicity_code: "14",
        is_living_in_town_since_birth: true,
        marital_status: "Never Married",
        marital_status_code: "1",
        nationality: "Ghanaian by birth",
        nationality_code: "01",
        religion: "No Religion",
        religion_code: "01",
        years_lived_in_village: 21
    },
    disability: {
        sight: false,
        hearing: false,
        physical: false,
        intellect: false,
        emotion: false,
        speech: false,
        other: '',
    },
    literacy: {
        highest_grade_attained: 12,
        highest_level_school: "Post graduate (Cert., Diploma, Masters, PHD, etc)",
        highest_level_school_code: "12",
        language: "English, French and Ghanaian language",
        language_code: "6",
        period_attended_school: "now",
    },
    economicActivity: {
        is_working: true,
        reason_not_seeking_work: '',
        engagement_form: 'Did not work but had job to go back to',
        establishment_name: 'Betika',
        establishment_location: 'Kenya',
        main_product_or_service: 'Software Development',
        main_product_or_service_code: '',
        employment_status: 'Full-time',
        employment_status_code: '',
        employment_sector: 'IT/Software Development',
        employment_sector_code: PropTypes.string,
        occupation: 'Software Engineer',
        occupation_description: PropTypes.string,
    },
    step: 7,
    totalSteps: 7
}

const createPerson = createAsyncThunk('persons/createPerson', async ({
                                                                         literacy,
                                                                         ict,
                                                                         demography,
                                                                         fertility,
                                                                         disablility
                                                                     }, thunkApi) => {
    try {
        const response = await PERSONS_API.createPerson(literacy, ict, demography, fertility, disablility);

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
    reducers: {
        next: (state) => {
            state.step = state.step === state.totalSteps ? state.step : state.step + 1;
        },
        goto: (state, action) => {
            state.step = action.payload >= 0 && action.payload <= state.totalSteps ? action.payload : state.step;
        },
        previous: state => {
            state.step = state.step === 0 ? 0 : state.step - 1;
        },
        saveRoster: (state, action) => {
            state.roster = action.payload;
        },
        saveLiteracy: (state, action) => {
            state.literacy = action.payload;
        },
        saveICT: (state, action) => {
            state.ict = action.payload;
        },
        saveDemography: (state, action) => {
            state.demography = action.payload;
        },
        saveDisability: (state, action) => {
            state.disability = action.payload;
        },
        saveFertility: (state, action) => {
            state.fertility = action.payload;
        },
        saveEconomicActivity: (state, action) => {
            state.economicActivity = action.payload;
        },
    },
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


const {reducer, actions} = personsSlice;

export const selectPersons = state => state.persons;
export const PERSON_ACTION_CREATORS = {
    deletePerson,
    updatePerson,
    createPerson,
    getPerson,
    getPersons,
    saveICT: actions.saveICT,
    saveFertility: actions.saveFertility,
    saveDemography: actions.saveDemography,
    saveDisability: actions.saveDisability,
    saveLiteracy: actions.saveLiteracy,
    saveRoster: actions.saveRoster,
    next: actions.next,
    previous: actions.previous,
    saveEconomicActivity: actions.saveEconomicActivity,
    goto: actions.goto,
};

export default reducer;