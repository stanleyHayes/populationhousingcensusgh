import {POPULATION_HOUSING_CENSUS_CONSTANTS} from "../utils/constants.js";
import axios from "axios";

const getDeceasedHouseholds = () => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/deceased-households`,
    });
}


const getDeceasedHousehold = (id) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/deceased-households/${id}`,
    });
}


const createDeceasedHousehold = (deceasedHouseholdMember) => {
    return axios({
        method: 'post',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/deceased-households`,
        body: deceasedHouseholdMember
    });
}


const updateDeceasedHousehold = (id, deceasedHouseholdMember) => {
    return axios({
        method: 'put',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/deceased-households/${id}`,
        body: deceasedHouseholdMember
    });
}



const deleteDeceasedHousehold = (id) => {
    return axios({
        method: 'delete',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/deceased-households/${id}`
    });
}


export const DECEASED_HOUSEHOLD_MEMBERS_API = {
    getDeceasedHousehold,
    getDeceasedHouseholds,
    createDeceasedHousehold,
    updateDeceasedHousehold,
    deleteDeceasedHousehold
};