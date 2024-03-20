import genderIcon from "../assets/gender.png";
import ageIcon from "../assets/age.png";
import babyIcon from "../assets/baby.png";
import muscleIcon from "../assets/muscle.png";
import personIcon from "../assets/person.png";
import lineTwo from "../assets/lineTwo.png";

const Limitations = () =>{

    return(
        <>
        <header>
            
        </header>
        <section className="bmi-limitations">
            <div className="text">
            <h2>Limitations of BMI</h2>
            <p>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>

            </div>
            <article className="gender">
                <h5><span><img src={genderIcon} alt="gender" /></span> Gender</h5>
                <p>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>
            </article>

            <div className="lineTwo">
                <img  src={lineTwo} alt="line"/>
            </div>

            <article  className="age">
                <h5><span><img src={ageIcon} alt="age" /></span> Age</h5>
                <p>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
            </article>

            <article  className="muscle">
                <h5><span><img src={muscleIcon} alt="muscle" /></span> Muscle</h5>
                <p>BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.</p>
            </article>

            <article  className="baby">
                <h5><span><img src={babyIcon} alt="baby" /></span> Pregnancy</h5>
                <p>Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
            </article>

            <article  className="race">
                <h5><span><img src={personIcon} alt="race" /></span> Race</h5>
                <p>Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.</p>
            </article>
            </section>
        </>
    );
};

export default Limitations;