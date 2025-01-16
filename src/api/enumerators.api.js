import {POPULATION_HOUSING_CENSUS_CONSTANTS} from "../utils/constants.js";
import axios from "axios";

const getEnumerators = (id, supervisor_code, date) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/enumerators?supervisor_code=${supervisor_code}&date=${date}`,
    });
}


const getEnumerator = (id) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/enumerators/${id}`,
    });
}


const createEnumerator = (enumerator) => {
    return axios({
        method: 'post',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/enumerators`,
        body: enumerator
    });
}


const updateEnumerator = (id, enumerator) => {
    return axios({
        method: 'put',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/enumerators/${id}`,
        body: enumerator
    });
}



const deleteEnumerator = (id) => {
    return axios({
        method: 'delete',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/enumerators/${id}`
    });
}


export const ENUMERATORS_API = {
    getEnumerator,
    getEnumerators,
    createEnumerator,
    updateEnumerator,
    deleteEnumerator
};