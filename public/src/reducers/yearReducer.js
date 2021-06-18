const initialState = { year: {} };

const yearReducer = (state = initialState, action) => {
  if (action.type === 'year') {
    return {
      year: action.year,
    };
  }
  return state;
};

export default yearReducer;
