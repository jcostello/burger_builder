import * as actionTypes from './../actions/actionTypes';

const initialState = {
  ingredients: {
    salad: 1,
    meat: 1,
    cheese: 1,
    bacon: 1
  },

  totalPrice: 4
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return { ...state, 
        ingredients: { ...state.ingredients, [action.ingName]: state.ingredients[action.ingName] + 1 },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return { ...state,
        ingredients: { ...state.ingredients, [action.ingName]: state.ingredients[action.ingName] - 1 },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingName]
      };
    default:
      return state;
  }
};

export default reducer;