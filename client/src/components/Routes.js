import { Routes, Route } from 'react-router-dom';
import App from '../App'

export default function MainRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<App />}></Route>
            <Route path='/builders' element={<App></App>} ></Route>
        </Routes>
    )
}