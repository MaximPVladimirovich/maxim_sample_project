import { Routes, Route } from 'react-router-dom';
import Builders from './Builders';
import NewBuilder from './NewBuilder';
import Order from './Order';
import Orders from './Orders';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/builders' element={<Builders />}> </Route>
            <Route path='/builders/newbuilder' element={<NewBuilder />}> </Route>
            <Route path='/orders' element={<Orders />}> </Route>
            <Route path='/orders/neworder' element={<Order />}> </Route>
        </Routes >
    )
}