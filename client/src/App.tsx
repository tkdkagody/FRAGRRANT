import React from 'react';
import { Redirect } from 'react-router-dom';
import { Switch ,Route, RouteComponentProps } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Modify from './pages/Modify';
import Mypage from './pages/Mypage';
import Perfume from './pages/Perfume';
import Result from './pages/Result';
import Test from './pages/Test';


const App: React.FC = () =>  {
  return (
 
    <Switch>
      <Redirect exact path='/' to='/main' />
      <Route path='/main' component={Main}/>
      <Route exact path="/perfume" component={Perfume} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/test_result" component={Result} />
      <Route exact path="/mypage" component={Mypage} />
      <Route exact path="/mypage/account_modify" component={Modify} />
      <Redirect path='*' to='/'/>
    </Switch>
   
  );
}

export default App;
