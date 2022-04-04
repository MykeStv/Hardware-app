import Sidebar from "./components/Sidebar";
import './assets/style/style.scss'
import Dashboard from "./containers/Dashboard";
import { Provider } from "react-redux";
import { store } from "./state/store";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inventory from "./containers/Inventory";
import Invoice from './containers/Invoice'
import Client from './containers/Client'
import Profile from './containers/Profile'
import SignUp from "./components/SignUp";
import Login from "./components/Login";


export * as actionCreators from './actions/index'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={store}>

          <Routes>
            <Route path="/*" element={<Sidebar />}>
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />

          </Routes>

          <Footer />

        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
