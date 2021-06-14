const initialState = { coins: [] };

const coinsReducer = (state = initialState, action) => {
  if (action.type === 'coins') {
    return {
      coins: action.coins,
    };
  }
  return state;
};

export default coinsReducer;
