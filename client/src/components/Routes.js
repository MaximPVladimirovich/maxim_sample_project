import { Routes, Route } from 'react-router-dom';
import App from '../App'
import Builders from './Builders';
import NewBuilder from './NewBuilder';
import NewOrder from './NewOrder';

export default function MainRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<App />}></Route>
            <Route path='/builders' element={<Builders />}> </Route>
            <Route path='/newbuilder' element={<NewBuilder />}> </Route>
            <Route path='/neworder' element={<NewOrder />}> </Route>
        </Routes >
    )
}