import {useEffect, useState} from "react";
import "./index.css";

const Header = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="header">
            <div className={"block-theme"}>
                <input onClick={toggleTheme} className="toggleTheme" type="checkbox" checked={theme === 'light'}/>
            </div>
        </div>
    );
};

export default Header;
