import React from 'react'
import CashBox from './components/Cashbox/CashBox';
import NavigationBar from './components/NavigationBar/NavigationBar';
// import { createStore, compose } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./redux/reducers/rootReducer";

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const store = createStore(rootReducer, composeEnhancers());

const App = () => (
  <>
    <NavigationBar />
    <CashBox />
  </>
)

export default App;
