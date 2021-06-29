import { combineReducers } from 'redux';

const rootReducer = combineReducers({  
    song: require('../pages/song/redux').reducer,
});

export default rootReducer;