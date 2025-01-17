import {POPULATION_HOUSING_CENSUS_CONSTANTS} from "../utils/constants.js";
import axios from "axios";

const getGeographicalAreas = (id, region_name, district_code) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/geographical-areas?region_name=${region_name || ""}&district_code=${district_code || ""}`,
    });
}


const getGeographicalArea = (id) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/geographical-areas/${id}`,
    });
}


const createGeographicalArea = (area) => {
    return axios({
        method: 'post',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/geographical-areas`,
        body: area
    });
}


const updateGeographicalArea = (id, area) => {
    return axios({
        method: 'put',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/geographical-areas/${id}`,
        body: area
    });
}


const deleteGeographicalArea = (id) => {
    return axios({
        method: 'delete',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/geographical-areas/${id}`
    });
}


export const GEOGRAPHICAL_AREA_API = {
    getGeographicalArea,
    getGeographicalAreas,
    createGeographicalArea,
    updateGeographicalArea,
    deleteGeographicalArea
};