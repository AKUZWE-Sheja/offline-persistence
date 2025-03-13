// Action creator - returns an action object
export const addMessage = (message) => ({
  type: "ADD_MESSAGE",
  payload: message, // Data being sent to the reducer
});
