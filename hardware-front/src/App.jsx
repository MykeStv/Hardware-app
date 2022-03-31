import Sidebar from "./components/Sidebar";
import './assets/style/style.scss'
import Dashboard from "./containers/Dashboard";
import { Provider } from "react-redux";
import { store } from "./state/store";

export * as actionCreators from './actions/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <Sidebar />
        <Dashboard />

      </Provider>
    </div>
  );
}

export default App;
