import {POPULATION_HOUSING_CENSUS_CONSTANTS} from "../utils/constants.js";
import axios from "axios";

const getPersons = (sex, marital_status, employment_status, education, relationship_to_head, age_min, age_max) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/persons?sex=${sex}&marital_status=${marital_status}&employment_status=${employment_status}&education=${education}&relationship_to_head=${relationship_to_head}&age_min=${age_min}&&age_max=${age_max}`,
    });
}


const getPerson = (id) => {
    return axios({
        method: 'get',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/persons/${id}`,
    });
}


const createPerson = (person) => {
    return axios({
        method: 'post',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/persons`,
        body: person
    });
}


const updatePerson = (id, person) => {
    return axios({
        method: 'put',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/persons/${id}`,
        body: person
    });
}


const deletePerson = (id) => {
    return axios({
        method: 'delete',
        url: `${POPULATION_HOUSING_CENSUS_CONSTANTS.BASE_URL}/api/persons/${id}`
    });
}


export const PERSONS_API = {
    getPerson,
    getPersons,
    createPerson,
    updatePerson,
    deletePerson
};