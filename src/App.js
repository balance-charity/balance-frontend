import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import AboutUs from "./components/Skills/skills";
import Testimonials from "./components/Works/works";
import Faq from "./components/Faq/faq";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <AboutUs />
            <Testimonials />
            <Faq />
            {/* <Contact /> */}
            <Footer />
        </div>
    );
}

export default App;
