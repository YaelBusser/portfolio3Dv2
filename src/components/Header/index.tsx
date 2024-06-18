import {useEffect, useState} from "react";
import "./index.css";

const Header = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <div className={"header"}>
            <input onClick={toggleTheme} className="toggle" type="checkbox" checked={theme === 'light'} />
        </div>
    )
}
export default Header;