import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [test, setTest] = useState('test react');
  
  const test1Btn = () => {
    axios.get('http://localhost:8080/test')
    .then(response => setTest(response.data))
      .catch(e => setTest(e.message));  // 에러 객체의 메시지만 저장
  }
  return (
    <div className="App">
      <h1>Spring Boot + React + NCP</h1>
      <h3>카운트: 1</h3>
      <div>Test: {test}</div>
      <button onClick={test1Btn}>test1</button><hr />
      <img src="./image/maru.jpg" alt="마루"/>
    </div>
  )
}

export default App
