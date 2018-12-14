import _ from 'lodash';
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types';

export default( state = {}, action) => {
  switch(action.type) {
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
    // return { ...state, [action.id]: undefined };
      return _.omit(state, action.payload);
    case FETCH_STREAMS:
      return _.mapKeys(action.payload, 'id');
    default:
      return state
  }
};