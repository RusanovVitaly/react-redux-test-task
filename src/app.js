import React from 'react';
import {Layout} from 'antd';
import './app.css';
import {Route, Switch} from 'react-router-dom';
import MainPage from "./views/MainPage";
import RegionPage from './views/RegionPage'
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {rootReducer} from "./redux/reducers/reducer";


const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path='/' exact={true} component={MainPage}/>
          <Route path='/page' component={RegionPage}/>
        </Switch>
      </Layout>
    </Provider>
  );
}
