const initialState = { moreCoins: [] };

const moreCoinsReducer = (state = initialState, action) => {
  if (action.type === 'moreCoins') {
    return {
      moreCoins: action.moreCoins,
    };
  }
  return state;
};

export default moreCoinsReducer;
