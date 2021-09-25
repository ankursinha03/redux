const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCRESE':
      return {count: state.count + 1};
    case 'DECREASE':
      return {count: state.count - 1};
    case 'M10':
      return {count: state.count * 10};
    case 'D10':
      return {count: state.count / 10};
    default:
      return {count: state.count};
  }
};
export default reducer;
