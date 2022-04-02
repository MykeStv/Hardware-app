import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducerInventory, sellReducer, infoProductReducer } from "../reducers/reducer";
import { getInvoicesReducer } from "../reducers/invoiceReducer";


const rootReducers = combineReducers({
    inventory: reducerInventory,
    sell: sellReducer,
    infoProduct: infoProductReducer,
    invoice: getInvoicesReducer,
})

export const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
)