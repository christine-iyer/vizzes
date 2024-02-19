import * as d3 from "d3";
// import './App.css';
import Circle from "./components/Circle";
import BarChart from "./components/BarChart";
import Input from './components/Input'
function App() {

  d3.select('p').style('background-color', 'rgb(189, 171, 201')
  return (
    <div className="App">
      <header className="App-header">
      
         <p> Paragraph 1</p>
           <p> Paragraph 2</p>
       <Circle /> 

      </header>
    
    <BarChart 
        data={[12, 5, 6, 6, 9, 10]}
        width={700}
        height={300}/>


    <BarChart 
        data={[18, 15, 16, 16, 19, 10]}
        width={700}
        height={300}/>

       <Input />

    </div>
  );
}

export default App;
