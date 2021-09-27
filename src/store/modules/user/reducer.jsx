const inicialState = { name: "" };

const userReducer = (state = inicialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      const { name } = action;
      return { name: name };

    default:
      return state;
  }
};

export default userReducer;
