
import './App.css';
import States from './Components/state.js';
import Effect from './Components/effect';
import Effect2 from './Components/effect2';
import Context from './Components/context';
import Reference from './Components/Reference';
import Reference2 from './Components/Reference2';


function App() {
  return (
    <div className="App">
      <h3>Use State</h3>
      <States/>
      <hr></hr>
      <h3>Use effect</h3>
      <Effect/>
      <hr></hr>
      <h3>Use effect2</h3>
      <Effect2/>
      <hr></hr>
      <h3>Use Context</h3>
      <Context/>
      <hr></hr>
      <h3>Reference</h3>
      <Reference/>
      <hr></hr>
      <h3>Reference 2</h3>
      <Reference2/>
      <hr></hr>
      <br></br>
      <br></br>
    </div>
    
  );
}

export default App;
