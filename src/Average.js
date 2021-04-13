import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = numbers => {
    console.log("calculate average");
    let average = 0;
    if (numbers.length > 0) {
        const sum = numbers.reduce((a, b) => a + b);
        average = sum / numbers.length;
    }
    return average;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputElement = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 처음 렌더링 될때만 함수 생성

    const onInsert = useCallback(() => {
        console.log(number, list);
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputElement.current.focus();
    }, [list, number]); // number or list가 바뀌었을 때만 생성

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputElement}/>
            <button onClick={onInsert}>Add</button>
            <ul>
                {list.map((num, index) => <li key={index}>{num}</li>)}
            </ul>
            <div>Average: {avg}</div>
        </div>
    );
}

export default Average;