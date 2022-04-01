import { createStore } from "redux";
import { AnyAction } from "redux";

interface BalanceState {
  balance: number;
}

const initialState: BalanceState = {
  balance: 0,
};

const reducer = (state = initialState, action: AnyAction) => {
  if (action.type === "GET_BALANCE") {
    return {
      balance: action.payload,
    };
  }

  return state;
};

const store = createStore(reducer);

export default store;
