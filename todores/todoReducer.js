const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          complete: false,
        },
      ];
    default:
      return state;
  }
};
export default todos;
