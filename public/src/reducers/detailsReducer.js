const initialState = { details: {} };

const detailsReducer = (state = initialState, action) => {
  if (action.type === 'details') {
    return {
      details: action.details,
    };
  }
  return state;
};

export default detailsReducer;
