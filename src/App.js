import React , { useState } from "react";
import './App.scss';
import Topimage from "./components/Topimage"
import Todo from "./components/Todo"
import BackColor from "./components/BackColor"

function App() {
  const [ style , setStyle ] = useState(true);
  
  return (
    <React.Fragment>
      <main>
        <Topimage style={style} />
        <Todo style={ style } setStyle={ setStyle }/>
      </main>
      <BackColor style={ style } />
    </React.Fragment>
  );

}

export default App;
