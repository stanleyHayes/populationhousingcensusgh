import {POPULATION_HOUSING_CENSUS_CONSTANTS} from "../utils/constants.js";
import axios from "axios";

const getHouseholds = (type_of_residence, ownership_type) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/households?type_of_residence=${type_of_residence}&ownership_type=${ownership_type}`,
    });
}


const getHousehold = (id) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/households/${id}`,
    });
}


const createHousehold = (household) => {
    return axios({
        method: 'post',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/households`,
        body: household
    });
}


const updateHousehold = (id, household) => {
    return axios({
        method: 'put',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/households/${id}`,
        body: household
    });
}


const deleteHousehold = (id) => {
    return axios({
        method: 'delete',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/households/${id}`
    });
}


export const HOUSEHOLD_API = {
    getHousehold,
    getHouseholds,
    createHousehold,
    updateHousehold,
    deleteHousehold
};