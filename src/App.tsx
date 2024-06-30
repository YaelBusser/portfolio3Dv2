import {BrowserRouter as Router} from 'react-router-dom';
import Routes from "./routes";
import "./index.css";
import {Suspense, useEffect, useState} from "react";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import {useMediaQuery, useTheme} from "@mui/material";

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        // Simule le chargement complet de la page
        const handleLoad = () => {
            setIsLoaded(true);
        };

        // Ajoute un écouteur d'événement pour quand la page est complètement chargée
        window.addEventListener("load", handleLoad);

        // Nettoie l'écouteur d'événement au démontage
        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <Router>
            <Suspense fallback={null}>
                <div className="app">
                    {
                        !isLoaded && !isMdDown ? (
                            <Loader/>
                        ) : (
                            <>
                                <Nav/>
                                <Cursor/>
                                <Routes/>
                            </>
                        )
                    }
                </div>
            </Suspense>
        </Router>
    )
}

export default App
