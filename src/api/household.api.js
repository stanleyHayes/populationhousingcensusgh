import {POPULATION_HOUSING_CENSUS_CONSTANTS} from "../utils/constants.js";
import axios from "axios";

const getHouseholds = (type_of_dwelling, outer_wall_material, roof_material, floor_material, geographical_area_id) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/dwellings?type_of_dwelling=${type_of_dwelling}&outer_wall_material=${outer_wall_material}&roof_material=${roof_material}&floor_material=${floor_material}&geographical_area_id=${geographical_area_id}`,
    });
}


const getHousehold = (id) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/dwellings/${id}`,
    });
}


const createHousehold = (dwelling) => {
    return axios({
        method: 'post',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/dwellings`,
        body: dwelling
    });
}


const updateHousehold = (id, dwelling) => {
    return axios({
        method: 'put',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/dwellings/${id}`,
        body: dwelling
    });
}


const deleteHousehold = (id) => {
    return axios({
        method: 'delete',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/dwellings/${id}`
    });
}


export const HOUSEHOLD_API = {
    getHousehold,
    getHouseholds,
    createHousehold,
    updateHousehold,
    deleteHousehold
};