import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from './util/asyncComponent'
import MyRoute from './util/MyRouter';

const Login = asyncComponent(() => import('./pages/login/login'))
const Register = asyncComponent(() => import('./pages/register/register'))
const Index = asyncComponent(() => import('./pages/index/index'))
const Detail = asyncComponent(() => import('./pages/details/details'))
const Listdetail = asyncComponent(() => import('./pages/listDetail/listDetail'))
// import Login from './pages/login/login'
// import Register from './pages/register/register'
// import Index from './pages/index/index'
// import Detail from './pages/details/details'
// import Listdetail from './pages/listDetail/listDetail'




function App() {
  return (
    <div className="App">
      {/*一级路由 */}
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register} ></Route>
        <MyRoute path='/index' component={Index} ></MyRoute>
        <MyRoute path='/detail/:id' component={Detail} ></MyRoute>
        <MyRoute path='/listdetail/:id/:title' component={Listdetail} ></MyRoute>
        <Redirect to='/login'></Redirect>
      </Switch>
    </div>
  );
}

export default App;
