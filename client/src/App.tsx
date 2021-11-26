import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Switch ,Route, RouteComponentProps } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import Main from './pages/Main';
import Modify from './pages/Modify';
import Mypage from './pages/Mypage';
import Perfume from './pages/Perfume';
import PerfumeDetail from './pages/Perfumedetail';
import Result from './pages/Result';
import Search from './pages/Search';
import Test from './pages/Test';
import axios from 'axios';




function App ()  {

  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  return (
    <>
    
    <Nav 
      loginModal={loginModal} 
      signupModal={signupModal}
      setLoginModal={setLoginModal}
      setSignupModal={setSignupModal}
    ></Nav>
 
    <Switch>
      <Redirect exact path='/' to='/main' />
      <Route  path={'/main'} component={Main}  />
     
      <Route path="/perfume"
					render={() => {
						return <Perfume/>;
					}} />
      <Route exact path={"/perfume_detail"} component={PerfumeDetail} />
      <Route exact path={"/test"} component={Test} />
      <Route exact path={"/test_result"} component={Result} />
      <Route exact path={"/search"} component={Search} />
      <Route exact path={"/mypage"} component={Mypage} />
      <Route exact path={"/mypage/account_modify"} component={Modify} />
      <Redirect path='*' to='/'/>
    </Switch>
   </>
  );
}

export default App;
