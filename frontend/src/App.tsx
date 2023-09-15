import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import HeaderNav from "./components/HeaderNav";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useUser} from "./hooks/UserProdiver";

function App() {

    const {isLogin, user, logout} = useUser();
    return (
      <>
          <BrowserRouter>
            <HeaderNav isLogin={isLogin} logout={logout} />

            <Routes>
                <Route path="/" element={<PublicRoute restricted={false} component={Home} />} />
                <Route path="/signin" element={<PublicRoute restricted={true} component={SignIn} />} />
                <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
            </Routes>
            <ToastContainer
                position="bottom-right"
            />
          </BrowserRouter>
      </>
    );
}

export default App;
