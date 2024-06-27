import "./index.css";
import Header from "../Header";

const Nav = () => {
    return (
        <nav>
            <a href={"#about"}><button>About</button></a>
            <button>Projects</button>
            <button>Contact</button>
            <Header/>
        </nav>
    )
}

export default Nav;
