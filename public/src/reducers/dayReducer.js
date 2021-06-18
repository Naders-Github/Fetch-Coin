const initialState = { day: [] };

const dayReducer = (state = initialState, action) => {
  if (action.type === 'day') {
    return {
      day: action.day,
    };
  }
  return state;
};

export default dayReducer;
