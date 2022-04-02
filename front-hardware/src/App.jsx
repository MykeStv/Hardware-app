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


export * as actionCreators from './actions/index'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={store}>

          <Footer />
          <Sidebar />


          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/invoice' element={<Invoice />} />
            <Route path='/client' element={<Client />} />
            <Route path='/profile' element={<Profile />} />

          </Routes>

        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
