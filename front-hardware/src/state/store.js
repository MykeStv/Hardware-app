import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducerInventory, sellReducer, infoProductReducer } from "../reducers/reducer";


const rootReducers = combineReducers({
    inventory: reducerInventory,
    sell: sellReducer,
    infoProduct: infoProductReducer,
})

export const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
)