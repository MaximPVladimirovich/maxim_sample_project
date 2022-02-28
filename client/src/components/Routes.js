import { Routes, Route } from 'react-router-dom';
import App from '../App'
import Builders from './Builders';

export default function MainRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<App />}></Route>
            <Route path='/builders' element={<Builders />}> </Route>
        </Routes >
    )
}