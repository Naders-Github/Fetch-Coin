const initialState = { trendingCoins: [] };

const trendingCoinsReducer = (state = initialState, action) => {
  if (action.type === 'trendingCoins') {
    return {
      trendingCoins: action.trendingCoins,
    };
  }
  return state;
};

export default trendingCoinsReducer;
