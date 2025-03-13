const initialState = {
  messages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE": // When an ADD_MESSAGE action is dispatched...
      return { ...state, messages: [...state.messages, action.payload] };  // Append new message
    default:
      return state;
  }
};

export default reducer;
