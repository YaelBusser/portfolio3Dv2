import {BrowserRouter as Router} from 'react-router-dom';
import Routes from "./routes";
import "./index.css";
import {Suspense} from "react";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";

const App = () => {

    return (
        <Router>
            <Suspense fallback={null}>
                <div className="app">

                    <Nav/>
                    <Cursor/>
                    <Routes/>
                </div>
            </Suspense>
        </Router>
    )
}
/*
import Loader from "./components/Loader";
import {useMediaQuery, useTheme} from "@mui/material";
import {Suspense, useEffect, useState} from "react";

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
 */
export default App
