import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import AddTodo from "./pages/AddTodo";


export default (
  	<Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
     	<Route path="addtodo" component={AddTodo}></Route>
   	</Route>
);
