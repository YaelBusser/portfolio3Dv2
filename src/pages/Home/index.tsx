import Hero from "../../components/Scenes/Hero";
import "./index.css";
import About from "../../components/About";
import Header from "../../components/Header";

const Home = () => {
    return (
        <>
            <main>
                <Header/>
                <section className={"about"}>
                    <Hero/>
                    <About/>
                </section>
            </main>
        </>
    )
}

export default Home;