import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Makee from '../components/Project/Makee';
import Lactalis from '../components/Project/Lactalis';
import AupresDeVous from '../components/Project/AupresDeVous';
import StG from '../components/Project/StG';

const AppRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.startsWith("/project/")) {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
    }, [location.pathname]);

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/project/makee" element={<Makee />} />
                <Route path="/project/lactalis" element={<Lactalis />} />
                <Route path="/project/apv" element={<AupresDeVous />} />
                <Route path="/project/stg" element={<StG />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AppRoutes;
