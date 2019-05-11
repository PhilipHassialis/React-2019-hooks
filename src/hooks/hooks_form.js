import React, { useState, useContext, useReducer } from "react";

const HooksForm = props => {
    const [valueSubmit, setValueSubmit] = useState("");
    const [valueChange, setValueChange] = useState("");

    const handleuseStateChange = event => {
        setValueChange(event.target.value);
    };

    const handleuseStateSubmit = event => {
        event.preventDefault();
        setValueSubmit(event.target.useState.value);
    };

    return (
        <div>
            <form onSubmit={handleuseStateSubmit}>
                <label>React useState:</label>
                <input id="useState" type="text" onChange={handleuseStateChange} />
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2>React useState:</h2>
                <p>Change: {valueChange}</p>
                <p>Submit: {valueSubmit}</p>
            </div>
        </div>
    );
};

export default HooksForm;
