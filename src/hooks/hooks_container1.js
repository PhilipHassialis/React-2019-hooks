import React, { useState, useEffect, useReducer, useContext } from "react";
import * as Reducer from "../store/hooks_state/hook_reducer";
import * as ACTIONS from "../store/actions/actions";
import Context from "../utils/context";

const HooksContainer1 = props => {
    const context = useContext(Context);

    const [stateValue, setValue] = useState(0);
    const [useEffectValue, setUseEffectValue] = useState(null);

    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState);

    useEffect(() => {
        setTimeout(() => setUseEffectValue("useEffect worked"), 3000);
    }, [stateValue]);

    const incrementValue = () => {
        setValue(stateValue + 1);
    };
    const decrementValue = () => {
        setValue(stateValue - 1);
    };

    const changeUseEffectValue = params => {
        setUseEffectValue("some string");
    };

    const handleDispatchTrue = () => {
        // dispatch (ACTIONS.SUCCESS)
        // dispatch ( { type: 'SUCCESS' })
        dispatch(ACTIONS.success());
    };

    const handleDispatchFalse = () => {
        dispatch(ACTIONS.failure());
    };

    return (
        <div>
            React Hooks
            <br />
            <button onClick={() => incrementValue()}>Increment Local State</button>
            <button onClick={() => decrementValue()}>Decrement Local State</button>
            <button onClick={() => changeUseEffectValue()}>Change useEffect Value</button>
            <button onClick={() => handleDispatchTrue()}>Dispatch True</button>
            <button onClick={() => handleDispatchFalse()}>Dispatch False</button>
            <p />
            <button onClick={() => context.addGlobalValue()}>Increment Global State</button>
            <button onClick={() => context.decGlobalValue()}>Decrement Global State</button>
            <p />
            <button onClick={() => context.dispatchContextTrue()}>Dispatch Global Context True</button>
            <button onClick={() => context.dispatchContextFalse()}>Dispatch Global Context False</button>
            <br />
            <div>
                <br />
                <p>{useEffectValue ? <p>{useEffectValue}</p> : <p>No value</p>}</p>
                <br />
                <p>{context.useContextSubmit ? <p>{context.useContextSubmit}</p> : <p>No userText</p>}</p>
                <br />
                {state.stateprop1 ? <p>Stateprop1 is true</p> : <p>Stateprop1 is false</p>}
                <br />
                <p>Local state: {stateValue}</p>
                <br />
                <p>Global state through context: {context.valueGlobalState} </p>
                <br />
                {context.reducerGlobalState ? <p>reducerGlobalState is true</p> : <p>reducerGlobalState is false</p>}
            </div>
        </div>
    );
};

export default HooksContainer1;
