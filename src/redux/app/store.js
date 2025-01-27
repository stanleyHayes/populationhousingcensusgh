import {configureStore} from "@reduxjs/toolkit";

import uiReducer from "../features/ui/ui-slice.js";
import deceasedHouseholdMembersReducer from "../features/deceased-members/deceased-members-slice.js";
import dwellingsReducer from "../features/dwellings/dwellings-slice.js";
import emigratedMembersReducer from "../features/emigrated-members/emigrated-members-slice.js";
import enumeratorsReducer from "../features/enumerators/enumerators-slice.js";
import geographicalAreasReducer from "../features/geographical-areas/geographical-areas-slice.js";
import personsReducer from "../features/household-members/household-members-slice.js";

import fisheriesLivestockReducer from "../features/fisheries-livestock-codes/fisheries-livestock-codes-slice.js";
import cropCodesReducer from "../features/crop-codes/crop-codes-slice.js";

import languagesReducer from "../features/languages/languages-slice.js";
import educationalLevelsReducer from "../features/educational-levels/educational-levels-slice.js";
import religionsReducer from "../features/religions/religions-slice.js";
import ethnicitiesReducer from "../features/ethnicities/ethnicities-slice.js";
import nationalitiesReducer from "../features/nationalities/nationalities-slice.js";
import maritalStatusesReducer from "../features/marital-statuses/marital-status-slice.js";
import relationshipCodesReducer from "../features/relationship-codes/relationship-codes-slice.js";
import regionsReducer from "../features/regions/regions-slice.js";
import districtsReducer from "../features/districts/districts-slice.js";
import householdReducer from "../features/households/household-slice.js";
import authenticationReducer from "../features/authentication/authentication-slice.js";

import {POPULATION_HOUSING_CENSUS_CONSTANTS} from "../../utils/constants.js";
import {HELPERS} from "../../utils/helpers.js";

const variant = localStorage.getItem(POPULATION_HOUSING_CENSUS_CONSTANTS.POPULATION_HOUSING_CENSUS_THEME_VARIANT_KEY) ?
    localStorage.getItem(POPULATION_HOUSING_CENSUS_CONSTANTS.POPULATION_HOUSING_CENSUS_THEME_VARIANT_KEY) : HELPERS.getSystemTheme();

const store = configureStore({
    reducer: {
        deceasedMembers: deceasedHouseholdMembersReducer,
        dwellings: dwellingsReducer,
        emigratedHouseholdMembers: emigratedMembersReducer,
        enumerators: enumeratorsReducer,
        geographicalAreas: geographicalAreasReducer,
        persons: personsReducer,
        ui: uiReducer,
        authentication: authenticationReducer,
        households: householdReducer,
        regions: regionsReducer,
        districts: districtsReducer,
        relationshipCodes: relationshipCodesReducer,
        maritalStatuses: maritalStatusesReducer,
        nationalities: nationalitiesReducer,
        ethnicities: ethnicitiesReducer,
        religions: religionsReducer,
        educationalLevels: educationalLevelsReducer,
        languages: languagesReducer,
        cropCodes: cropCodesReducer,
        fisheriesLivestockCodes: fisheriesLivestockReducer
    },
    preloadedState: {
        ui: {
            variant
        }
    }
});

export default store;