import { CONSTANTS } from '../constants';
import { combineReducers } from 'redux';

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.ADD_NOTE:
      state = [
        ...state,
        Object.assign({}, action.note, {
          id: state.reduce((acc, v) => (v.id > acc ? v.id + 1 : acc + 1), 1)
        })
      ];
      return state;

    case CONSTANTS.DELETE_NOTE:
      return [...state].filter(m => m.id !== action.note.id);

    case CONSTANTS.UPDATE_NOTE:
      return [...state].map(m => {
        if (m.id === action.note.id) {
          return Object.assign({}, action.note, {
            body: action.note.body
          });
        }
        return m;
      });

    default:
      return state;
  }
};

export const mainReducer = combineReducers({ notes: noteReducer });
