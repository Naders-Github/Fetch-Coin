const initialState = { week: {} };

const weekReducer = (state = initialState, action) => {
  if (action.type === 'week') {
    return {
      week: action.week,
    };
  }
  return state;
};

export default weekReducer;
