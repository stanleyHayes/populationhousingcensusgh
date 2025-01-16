import {POPULATION_HOUSING_CENSUS_CONSTANTS} from "../utils/constants.js";
import axios from "axios";

const getDwellings = (id, supervisor_code, date) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/dwellings?supervisor_code=${supervisor_code}&date=${date}`,
    });
}


const getDwelling = (id) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/dwellings/${id}`,
    });
}


const createDwelling = (dwelling) => {
    return axios({
        method: 'post',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/dwellings`,
        body: dwelling
    });
}


const updateDwelling = (id, dwelling) => {
    return axios({
        method: 'put',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/dwellings/${id}`,
        body: dwelling
    });
}



const deleteDwelling = (id) => {
    return axios({
        method: 'delete',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/dwellings/${id}`
    });
}


export const DWELLINGS_API = {
    getDwelling,
    getDwellings,
    createDwelling,
    updateDwelling,
    deleteDwelling
};