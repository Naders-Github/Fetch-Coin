const initialState = { details: {} };

const detailsReducers = (state = initialState, action) => {
  if (action.type === 'details') {
    return {
      details: action.details,
    };
  }
  return state;
};

export default detailsReducers;
