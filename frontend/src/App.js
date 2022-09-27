import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'

import Home from './containers/Home';
import Login from './containers/Login';
import Account from './containers/Account';
import Layout from './hocs/Layout';
import Navbar from './components/Navbar';
import './app.css'

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/account" element={<Account />} />
                    <Route render={() => <Navigate to="/" />} />
                </Routes>
            </Layout>
        </Router>
    </Provider>

);

export default App