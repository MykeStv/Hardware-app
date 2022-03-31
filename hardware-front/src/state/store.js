import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducerInventory } from "../reducers/reducer";


export const store = createStore(
    reducerInventory,
    applyMiddleware(thunk)
)