import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';
import { useState } from 'react';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => { setVisible(!visible); }}>{visible ? '숨기기': '보이기' }</button>
      <br/>
      {visible && <Info/>}
    </div>
  );
}

export default App;
