import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {HOUSEHOLD_API} from "../../../api/household.api.js";

const initialState = {
    households: [

    ],
    loading: false,
    error: null,
    step: 0,
    totalSteps: 14,
    front_page: {
        hometown: '',
        region: {name: '', code: ''},
        house_address: '',
        district: {name: '', code: ''},
        district_type: {name: '', code: ''},
        locality: {name: '', code: ''},
        sub_district: '',
        NHIS_ECG_VRA_OtherNumber: '',
        household_contacts: [],
        ea: {number: '', type: ''},
        house_structure_number: '',
        household_number_within_house: '',
        residence_type: '',
        date_started: '',
        date_completed: '',
        total_visits: 1,
    },
    roster: [
        {
            name: 'Emmanuella Sangmuah',
            age: 26,
            sex: 'female',
        },
        {
            name: 'Yvonne Dewortor',
            age: 27,
            sex: 'female',
        },
        {
            name: 'Pontifex Maximus',
            age: 30,
            sex: 'male',
        }
    ], // full name, relationship code, sex, status, dob, destination, country_code, absent_months,
    absentees: [],
    // literacy: language, school, highest level school, highest grade attained,
    // economic: name of establishment, location of establishment, main product or service, service code, employment status, sector
    // disability: sight, hearing, physical, intellect, emotion, speech, other
    // ict: phone, internet
    // fertility: male, female, surviving: male, female, past 12 months: male female
    emigration: [],// full name, relationship code, sex, status, dob, destination: country, code, country_code, departure_year, activity_abroad, religion, ethnicity, nationality, birthplace, place_of_residence, marital_status, is_living_in_town_since_birth, years_lived_in_village
    mortality: [], // name, sex, age, unnatural death, birth death
    household_ict: {
        has_fixed_telephone: false,
        has_computer: false,
    },
    agriculture: {
        farms_crops: true,
        grows_trees: false,
        rear_livestock: false,
        farms_fish: false,
        family_farming_count: {
            male: 0,
            female: 0
        },
        crops: [],// crop type, crop code, farm size, measurement unit, cropping type
        livestock_or_fisheries: [], // type of livestock or fishery, number, livestock or fishery code
    },
    housing_conditions: {
        type: '',
        outer_wall: '',
        floor: '',
        roof: '',
        tenure_arrangement: '',
        ownership_type: '',
        rooms: {
            total: 0,
            bedroom_count: 0,
            share_room_with_other_household: true,
            total_household_share_with_other_household: 0
        },
        lighting: '',
        water_supply: {
            source_drinking_water: '',
            source_domestic_activities: ''
        },
        cooking_fuel: '',
        cooking_space: '',
        bathing_facility: '',
        toilet_facility: {
            type: '',
            shared: false,
            total: 0,
            total_household_use: 0
        },
        solid_waste_disposal: '',
        liquid_waste_disposal: '',
    }
};

const createHousehold = createAsyncThunk('households/createHousehold', async ({token}, thunkAPI) => {
    try {
        const response = await HOUSEHOLD_API.createHousehold({token})

        return response.data.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
});


const loadHousehold = createAsyncThunk('households/loadHousehold', async ({token}, thunkAPI) => {
    try {
        const response = await HOUSEHOLD_API.createHousehold({token})

        return response.data.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
});


const householdSlice = createSlice({
    name: "households",
    initialState,
    reducers: {
        next: (state) => {
            state.step = state.step === state.totalSteps ? state.step : state.step + 1;
        },
        goto: (state, action) => {
            state.step = action.payload;
        },
        previous: state => {
            state.step = state.step === 0 ? 0 : state.step - 1;
        },
        save: (state, action) => {
            state = {...state, ...action.payload}
        },
        load: (state, action) => {
        },
        saveHouseholdICT: (state, action) => {
            state.newHousehold.household_ict = action.payload;
        },
        saveHousingConditions: (state, action) => {
            state.newHousehold.household_conditions = action.payload;
        },
        saveRoster: (state, action) => {
            state.newHousehold.roster = action.payload;
        },
        saveAbsentees: (state, action) => {
            state.newHousehold.absentees = action.payload;
        },
        saveEmigration: (state, action) => {
            state.newHousehold.emigration = action.payload;
        }
    },

    extraReducers: builder => {
        builder.addCase(createHousehold.pending, (state, action) => {

        }).addCase(createHousehold.fulfilled, (state, action) => {

        }).addCase(createHousehold.rejected, (state, action) => {

        }).addCase(loadHousehold.pending, (state, action) => {

        }).addCase(loadHousehold.fulfilled, (state, action) => {

        }).addCase(loadHousehold.rejected, (state, action) => {

        })
    }
});

export const selectHousehold = state => state.households;
const {reducer, actions} = householdSlice;
export const HOUSEHOLD_ACTIONS = {
    next: actions.next,
    goto: actions.goto,
    previous: actions.previous,
    createHousehold,
    saveHouseholdICT: actions.saveHouseholdICT,
    saveHousingConditions: actions.saveHousingConditions,
    saveRoster: actions.saveRoster,
    saveAbsentees: actions.saveAbsentees,
    saveEmigration: actions.saveEmigration,
};
export default reducer;