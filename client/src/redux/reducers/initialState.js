import {Map, List, fromJS} from 'immutable';

export default {
    projects: Map({
        projectsById: {},
        //TODO remove
        currentProject: ""
    }),
    users: List(),
    current_user: Map(),
    cases: Map({
        casesById: {}
    })
};