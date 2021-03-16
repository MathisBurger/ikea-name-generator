import './App.css';
import {GenerateName} from "./Generate";

function App() {
  return (
    <div className={"container"}>
      <button className={"btn-grad"} onClick={() => generateClick()}>Generate</button>
    </div>
  );

}

function generateClick() {
    console.log(GenerateName());
}


export default App;
