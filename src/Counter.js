import React, { useState, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value -1 };
    }
    return state;
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <h1>현재 카운트 : { state.value }</h1>
            <br/>
            <button onClick={() => {dispatch({ type: 'INCREMENT' })}}>+1</button>
            <button onClick={() => {dispatch({ type: 'DECREMENT' })}}>-1</button>
        </div>
    );
};

// const Counter = () => {
//     const [value, setValue] = useState(0);
//     const onClickCountUp = () => {
//         setValue(value + 1);
//     };
//     const onClickCountDown = () => {
//         setValue(value - 1);
//     };
//     return (
//         <div>
//             <h1>카운트: {value} </h1>
//             <button onClick={() => { onClickCountUp(); }}>키운트 업</button>
//             <button onClick={() => { onClickCountDown(); }}>키운트 다운</button>
//         </div>
//     );
// };

export default Counter;