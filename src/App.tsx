import {BrowserRouter as Router} from 'react-router-dom';
import Routes from "./routes";
import "./index.css";
import {Suspense} from "react";
import Cursor from "./components/Cursor";

const App = () => {
    return (
        <Router>
            <Suspense fallback={null}>
                <div className="app">
                    <Cursor/>
                    <Routes/>
                </div>
            </Suspense>
        </Router>
    )
}

export default App