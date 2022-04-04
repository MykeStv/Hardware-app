import Sidebar from "./components/Sidebar";
import './assets/style/style.scss'
import { Provider, useSelector } from "react-redux";
import { store } from "./state/store";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navigate } from "react-router-dom";

export * as actionCreators from './actions/index'

function App() {

  // const authState = useSelector((state) => state.authentication.authState)

  // const isAuth = () => {
  //   if (authState === null || authState === undefined) {
  //     return false;
  //   } else {
  //     return true
  //   }
  // }

  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={store}>

          <Routes>
            {/* <Route path="/*" element={<Sidebar />} /> */}


            <Route path='/login' element={<Login />} />
            <Route exact path='/signup' element={<SignUp />} />

            <Route path='*' element={<ProtectedRoute />} />
            {/* <Route
              path='*'
              element={isAuth ? <Sidebar /> : <Navigate to='/login' />}
            /> */}

          </Routes>

          <Footer />

        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

