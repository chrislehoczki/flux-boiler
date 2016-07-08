//require("../sass/nav.css")

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";
import routes from "./routes.js";


import createBrowserHistory from 'history/lib/createBrowserHistory';

let history = createBrowserHistory();


//THIS SYNCS SERVER AND CLIENT PROPS
import * as todoActions from "./actions/todoActions.js";
import todoStore from "./stores/todoStore.js"
let initialState = JSON.parse(document.getElementById("initialState").innerHTML);
console.log(initialState)
todoActions.initiateTodos(initialState)
console.log(todoStore.items)


//RENDER APP IN HTML
const app = document.getElementById('app');
ReactDOM.render(<Router history={history}>{routes}</Router>, app);
