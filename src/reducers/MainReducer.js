export const mainReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      const newFriend = action.payload;
      const afterAddState = state.concat([newFriend]);
      return [...afterAddState];
    case 'REMOVE_FRIEND':
      let id = action.payload;
      let afterRemoveState = state.filter((friend) => {
        return friend.id !== id;
      });
      return [...afterRemoveState];
    case 'UPDATE_FRIEND':
      const friendID = action.payload.id;
      const { name, age } = action.payload;
      let updatedState = state.map((item) => {
        if (item.id === friendID) {
          return { ...item, name, age };
        } else {
          return item;
        }
      });
      return [...updatedState];
    default:
      return [...state];
  }
};
