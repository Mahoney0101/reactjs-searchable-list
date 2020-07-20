import React from 'react';
import './App.css';
import {ButtonList} from './components/buttonlist'

function App() {
  let list = [["Banana",1],["Orange",2],["Plum",3],["Raspberry",4],["Mango",5],["Lemon",6]];

  return (

    <div className="containerdiv">
        <h1>Searchable list Component</h1>
        <ButtonList data={list}/>
    </div>
  );
}

export default App;
