

type IInitialState = {
  name : string,
  age : number,
  city : (object | string)
}

const initialState : IInitialState = {
  name: 'SoftRequest',
  age: 29,
  city: {},
};

const reducer = (state = initialState, action : any) => {
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

