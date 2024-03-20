import React, { useState, useEffect, useCallback } from 'react';
import UnitsSelector from './UnitsSelector';
import HeightInput from './HeightInput';
import WeightInput from './WeightInput';
import ResultsDisplay from './ResultsDisplay';

const Calculator = () => {
    const [units, setUnits] = useState('Metric');
    const [height, setHeight] = useState({ ft: 0, in: 0, cm: 0 });
    const [weight, setWeight] = useState({ st: 0, lbs: 0, kg: 0 });
    const [bmi, setBmi] = useState('');
    const [bmiCalculated, setBmiCalculated] = useState(false); 
    const [bmiMessage, setBmiMessage] = useState('');

    const calculateBmi = useCallback(() => {
        let totalHeight = 0;
        let totalWeight = 0;
    
        if (units === 'Metric') {
            totalHeight = height.cm / 100;
            totalWeight = weight.kg;
        } else {
            totalHeight = (height.ft * 12 + height.in) * 0.0254;
            totalWeight = (weight.st * 14 + weight.lbs) * 0.453592;
        }
    
        if (totalHeight && totalWeight) {
            const bmi = totalWeight / (totalHeight ** 2);
            setBmi(bmi.toFixed(1));
    
            const lowerWeightLimit = (18.5 * totalHeight ** 2);
            const upperWeightLimit = (24.9 * totalHeight ** 2);
    
            let weightDifference;
            if (units === 'Metric') {
                weightDifference = bmi > 24.9 
                    ? `You need to lose ${(totalWeight - upperWeightLimit).toFixed(2)} kg to reach a healthy weight. Your healthy weight range is ${lowerWeightLimit.toFixed(2)} - ${upperWeightLimit.toFixed(2)} kg.`
                    : bmi < 18.5 
                    ? `You need to gain ${(lowerWeightLimit - totalWeight).toFixed(2)} kg to reach a healthy weight. Your healthy weight range is ${lowerWeightLimit.toFixed(2)} - ${upperWeightLimit.toFixed(2)} kg.`
                    : `Your BMI suggests you're at a healthy weight. Your healthy weight range is ${lowerWeightLimit.toFixed(2)} - ${upperWeightLimit.toFixed(2)} kg.`;
            } else {
                let lowerWeightLimitLbs = lowerWeightLimit * 2.20462;
                let upperWeightLimitLbs = upperWeightLimit * 2.20462;
                weightDifference = bmi > 24.9 
                    ? `You need to lose ${((totalWeight * 2.20462) - upperWeightLimitLbs).toFixed(2)} lbs to reach a healthy weight. Your healthy weight range is ${(lowerWeightLimitLbs / 14).toFixed(2)}st - ${(upperWeightLimitLbs / 14).toFixed(2)}st.`
                    : bmi < 18.5 
                    ? `You need to gain ${(lowerWeightLimitLbs - (totalWeight * 2.20462)).toFixed(2)} lbs to reach a healthy weight. Your healthy weight range is ${(lowerWeightLimitLbs / 14).toFixed(2)}st - ${(upperWeightLimitLbs / 14).toFixed(2)}st.`
                    : `Your BMI suggests you're at a healthy weight. Your healthy weight range is ${(lowerWeightLimitLbs / 14).toFixed(2)}st - ${(upperWeightLimitLbs / 14).toFixed(2)}st.`;
            }
    
            setBmiMessage(weightDifference);
            setBmiCalculated(true);
        }
    }, [height, weight, units]);
    

    useEffect(() => {
        if (units === 'Metric') {
            if (height.cm > 0 && weight.kg > 0) {
                calculateBmi();
            }
        } else {
            if ((height.ft > 0 || height.in > 0) && (weight.st > 0 || weight.lbs > 0)) {
                calculateBmi();
            }
        }
    }, [height, weight, calculateBmi, units]);

    const handleUnitChange = (event) => {
        setUnits(event.target.value);
        setHeight({ ft: 0, in: 0, cm: 0 });
        setWeight({ st: 0, lbs: 0, kg: 0 });
        setBmi('');
        setBmiMessage('');
    };

    const handleHeightChange = (unit) => (event) => {
        setHeight({ ...height, [unit]: parseFloat(event.target.value) });
    };

    const handleWeightChange = (unit) => (event) => {
        setWeight({ ...weight, [unit]: parseFloat(event.target.value) });
    };

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            calculateBmi();
        }
    };

    return(
        <div>
            <section className="hero-form">
                <h4>Enter your details below</h4>
                <UnitsSelector units={units} handleUnitChange={handleUnitChange} />

                <section className={units === 'Metric' ? 'hero-input' : 'hero-input-row'}>
                    <HeightInput units={units} height={height} handleHeightChange={handleHeightChange} handleKeyUp={handleKeyUp} />
                    <WeightInput units={units} weight={weight} handleWeightChange={handleWeightChange} handleKeyUp={handleKeyUp} />
                </section>

                <ResultsDisplay bmi={bmi} bmiMessage={bmiMessage} bmiCalculated={bmiCalculated} />
            </section>
        </div>
    );
};

export default Calculator;
