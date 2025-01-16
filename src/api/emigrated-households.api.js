import {POPULATION_HOUSING_CENSUS_CONSTANTS} from "../utils/constants.js";
import axios from "axios";

const getEmigratedHouseholds = () => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/former-household-members`,
    });
}


const getEmigratedHousehold = (id) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/former-household-members/${id}`,
    });
}


const createEmigratedHousehold = (formerHouseholdMember) => {
    return axios({
        method: 'post',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/former-household-members`,
        body: formerHouseholdMember
    });
}


const updateEmigratedHousehold = (id, formerHouseholdMember) => {
    return axios({
        method: 'put',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/former-household-members/${id}`,
        body: formerHouseholdMember
    });
}



const deleteEmigratedHousehold = (id) => {
    return axios({
        method: 'delete',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/former-household-members/${id}`
    });
}


export const FORMER_HOUSEHOLD_MEMBERS_API = {
    getEmigratedHousehold,
    getEmigratedHouseholds,
    createEmigratedHousehold,
    updateEmigratedHousehold,
    deleteEmigratedHousehold
};