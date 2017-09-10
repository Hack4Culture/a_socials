import { combineReducers } from 'redux';
import { socialClubs, socialClub } from './socialClubReducers';
import { event} from './eventReducers';


const rootReducer = combineReducers({
  socialClubs,
  socialClub,
  event
});

export default rootReducer;