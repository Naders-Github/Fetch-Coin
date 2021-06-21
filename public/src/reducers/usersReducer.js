const initialState = { users: [] };

const usersReducer = (state = initialState, action) => {
  if (action.type === 'users') {
    return {
      users: action.users,
    };
  }
  return state;
};

export default usersReducer;
