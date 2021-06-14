const initialState = { watch: {} };

const watchReducer = (state = initialState, action) => {
  if (action.type === 'watch') {
    return {
      watch: action.watch,
    };
  }
  return state;
};

export default watchReducer;
