import actionTypes from './actionTypes';
import httpClient from '../../clients/httpClient';


export const getCases = (projectId) => {
    return {
        type: actionTypes.GET_CASES,
        payload: httpClient.get(`/projects/${projectId}/cases`).then((res) => res.data)
    }
};