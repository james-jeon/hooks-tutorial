import React, { useEffect, useReducer, useState } from 'react';
import useInput from './useInput';

const Info = () => {
    const [state, onChange] = useInput({
        name: '',
        nickname: ''
    });

    return (
        <div>
            <h1>이름: {state.name}</h1>
            <h2>닉네임: {state.nickname}</h2>

            <input name="name" value={state.name} onChange={onChange}/>
            <input name="nickname" value={state.nickname} onChange={onChange}/>
            
        </div>
    );
}

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');
//     const onChangeName = (e) => {
//         setName(e.target.value);
//     };
//     const onChangeNickName = (e) => {
//         setNickname(e.target.value);
//     };

//     // componentDidMount + componentDidUpdate
//     // useEffect(() => {
//     //     console.log("finished rendering ", name, nickname);
//     // });
//     // componentDidMount
//     // useEffect(() => {
//     //     console.log("Only did mount");
//     // }, []);
//     // componentDidUpdate - name
//     // useEffect(() => {
//     //     console.log("Only update name: ", name);
//     // }, [name]);
//     /*
//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.name !== this.state.name) {
//             //TODO
//         }
//     }
//     */
//    // componentWillUnmount
//    useEffect(() => {
//         console.log("Only update name: ", name);
//         return () => {
//             console.log("clean up : ", name);
//         };
//    }, [name]);

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName}></input>
//                 <input value={nickname} onChange={onChangeNickName}></input>
//             </div>
//             <div>
//                 <b>이름: </b> {name}
//             </div>
//             <div>
//                 <b>닉네임: </b> {nickname}
//             </div>
//         </div>
//     );
// }

export default Info;