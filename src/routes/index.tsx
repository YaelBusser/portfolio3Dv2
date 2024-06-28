import {Route, Routes} from 'react-router-dom';
import Home from "../pages/Home";
import Makee from "../components/Project/Makee";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/makee" element={<Makee />} />
        </Routes>
    );
}

export default AppRoutes;
