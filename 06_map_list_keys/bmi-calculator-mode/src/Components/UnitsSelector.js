const UnitsSelector = ({ units, handleUnitChange }) => (
    <section className="hero-radio">
        <label className="label-radio">
            <input 
            type="radio" 
            name="units" 
            value="Metric"
            checked={units === 'Metric'}
            onChange={handleUnitChange}
            /> Metric
        </label>
    
        <label className="label-radio">
            <input 
            type="radio" 
            name="units" 
            value="Imperial"
            checked={units === 'Imperial'}
            onChange={handleUnitChange}
            /> Imperial
        </label>
        </section>
    );
    export default UnitsSelector;
