import {combineReducers} from 'redux'
import testReducer from '../../features/sandbox/testReducer'
import profileReducer from '../../features/profileReducer'
import modalReducer from '../common/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../async/asyncReducer';
import userReducer from '../../features/users/userPage/userReducer';
import projectReducer from '../../features/ProjectPage/projectReducer';

const rootReducer = combineReducers({
    test: testReducer,
    profile: profileReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    user: userReducer,
    project: projectReducer
})

export default rootReducer;