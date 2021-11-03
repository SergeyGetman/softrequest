const initialState = {
  name: 'Sergey',
  age: 18,
  city: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_CITY':
      return {
        ...state,
        city: action.city,
      };

    default:
      return state;
  }
};

export default reducer;

