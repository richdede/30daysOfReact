import { useContext } from "react";
import ThemeContext from './ThemeContext';
import logo from "../assets/logo.png";
import manDarkMode from "../assets/man-dark-mode.png";
import manLightMode from "../assets/man-light-mode.png";
import line from "../assets/line.png";
import Limitations from "./Limitations";
import Tips from "./Tips";
import Calculator from "./Calculator";

const BodyMass = () => {

    const {isDarkMode} = useContext(ThemeContext);

    return(
        <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
            <section className="hero dark light">
                <div>
                    <img className="logo" src={logo} alt="logo"/>
                    <section className="hero-info dark light">
                        <h1 className="heading">Body Mass Index Calculator</h1>
                        <p className="hero-info-text">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
                    </section>
                </div>
                <div>
                    <Calculator />
                </div>
            </section>

            <div>
                <img className="line" src={line} alt="line"/>
            </div>

            <section className="result-means">
                <section className="result-image">
                    <img className="dark-theme-img" src={manDarkMode} alt="man with sushi"/>
                    <img className="light-theme-img" src={manLightMode} alt="man with sushi"/>
                </section>
                <section className="result-text">
                    <h2>What your BMI result means</h2>
                    <p className="result-par">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
                </section>
            </section>

            <Tips />

            <Limitations/>

        </div>
    );
    };

export default BodyMass;