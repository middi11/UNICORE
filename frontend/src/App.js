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
import FarmerDetails from './containers/FarmerDetails';
import FarmerDetailsSec from './containers/FarmerDetailsSec';
import Inventory from './containers/Inventory';
import PlantProgress from './containers/PlantProgress';
import Repository from './containers/Repository';
import Report from './containers/Report';
import PlantProgressDetails from './containers/PlantProgressDetails';
import Summary from './containers/Summary';
import Navbar from './components/Navbar';
import PrivateRouteAdmin from './hocs/PrivateRouteAdmin'
import PrivateRouteManager from './hocs/PrivateRouteManager'
import './app.css'

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/account" element={<Account />} />
                    <Route exact path="/farmer" element={<FarmerDetails />} />
                    <Route exact path="/farmersec" element={<FarmerDetailsSec />} />
                    <Route exact path="/inventory" element={<Inventory />} />
                    <Route exact path="/plantprogress" element={<PlantProgress />} />
                    <Route exact path="/repository" element={<Repository />} />

                    <Route exact path="/report" element={
                        <PrivateRouteManager>
                            <Report />
                        </PrivateRouteManager>
                    } />

                    <Route exact path="/plantprogressdetails" element={<PlantProgressDetails />} />
                    <Route exact path="/summary" element={<Summary />} />
                    <Route render={() => <Navigate to="/" />} />
                </Routes>
            </Layout>
        </Router>
    </Provider>

);

export default App