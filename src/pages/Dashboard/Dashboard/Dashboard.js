import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Dashboard.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Review from '../Review/Review';
import useAuth from '../../../hooks/useAuth';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrders from '../ManageOrders/ManageOrders';

const Dashboard = () => {
    const { handleLogout } = useAuth();
    let { path, url } = useRouteMatch();
    // const [isTrue, setIsTrue] = useState(true);
    const isTrue = true;
    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="py-5 border-end">
                            <h3 className="text-danger">Dashboard</h3>
                            <Link className="dashboard-option fw-bold" to={`${url}/myorder`}>My Orders</Link>
                            <br />
                            <Link className="dashboard-option fw-bold" to={`${url}/payment`}>Make Payment</Link>
                            <br />
                            <Link className="dashboard-option fw-bold" to={`${url}/review`}>Review</Link>
                            <br />
                            <Link className="dashboard-option fw-bold" to={`${url}/manageOrders`}>Manage Orders</Link>
                            <br />
                            <Link className="dashboard-option fw-bold" to={`${url}/manageProducts`}>Manage Products</Link>
                            <br />
                            <Link className="dashboard-option fw-bold" to={`${url}/addProduct`}>Add a Product</Link>
                            <br />
                            <Link className="dashboard-option fw-bold" to={`${url}/makeAdmin`}>Make Admin</Link>
                            <br />
                            <Link className="dashboard-option fw-bold" to={`/login`}> <p onClick={handleLogout}>Logout</p></Link>
                        </div>

                    </div>
                    <div className="col-md-10">
                        <Switch>
                            <Route exact path={path}>
                                {
                                    isTrue ? <MyOrders></MyOrders> : <MakeAdmin></MakeAdmin>
                                }
                            </Route>

                            <Route path={`${url}/myOrder`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route path={`${path}/manageOrders`}>
                                <ManageOrders></ManageOrders>
                            </Route>
                            <Route path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                            <Route path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;