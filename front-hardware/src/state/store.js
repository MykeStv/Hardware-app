import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducerInventory, sellReducer } from "../reducers/reducer";


const rootReducers = combineReducers({
    inventory: reducerInventory,
    sell: sellReducer
})

export const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
)