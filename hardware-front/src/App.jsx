import Sidebar from "./components/Sidebar";
import './assets/style/style.scss'
import Dashboard from "./containers/Dashboard";
import { Provider } from "react-redux";
import { store } from "./state/store";
import Footer from "./components/Footer";

export * as actionCreators from './actions/index'

function App() {
  return (
    <div className="app">
      <Provider store={store}>

        <Footer />
        <Sidebar />
        <Dashboard />

      </Provider>
    </div>
  );
}

export default App;
