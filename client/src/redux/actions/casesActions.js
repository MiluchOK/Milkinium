import actionTypes from './actionTypes';
import httpClient from '../../clients/httpClient';


export const getCases = () => {
    return {
        type: actionTypes.GET_CASES,
        payload: httpClient.get('/cases').then((res) => res.data)
    }
};