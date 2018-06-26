import { CONSTANTS } from '../constants';

// let index = 0;

export const addNote = body => {
  return {
    type: CONSTANTS.ADD_NOTE,
    note: {
      body
    }
  };
};

export const deleteNote = id => {
  return {
    type: CONSTANTS.DELETE_NOTE,
    note: {
      id
    }
  };
};

export const updateNote = (id, body) => {
  return {
    type: CONSTANTS.UPDATE_NOTE,
    note: {
      id,
      body
    }
  };
};
