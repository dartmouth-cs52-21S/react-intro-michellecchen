import { combineReducers } from 'redux';
import CountReducer from './count-reducer';
import VideoReducer from './video-reducer';

const rootReducer = combineReducers({
    count: CountReducer,
    video: VideoReducer,
});

export default rootReducer;
