import React , { useState } from "react";

const TasksHeader = (props) => { 
  const { style , setStyle , fullDeta , setDeta } = props;
  // this hook we use to all element which add to "Todo list"
  // have unice id bacause we have default Tasks this hook default 
  // value is 6 so first addition tasks id is 6 then 7 and so....
  const [ num , setNum ] = useState(6)


  /* 
   * input_Text_Hendler function we use beacuse every time when use 
   * click Enter key happend these
   * 1. takse value from input filed
   * 2. increase id number
   * 4. add new deta in todo list
   * 5. clear the input filed
   *
  */
  const input_Text_Hendler = (e) => { 

    if(e.keyCode  === 13 ) { 
      let newTask = e.target.value
      
      setNum( (num) => num + 1)

      setDeta([ 
        {id: num, text: newTask, complate: false},
        ...fullDeta
      ])

      e.target.value = ""
    }

  }

  return (  
    <div className="tasks_header"> 

      <div className="header_text_icone">
        <h1>TODO</h1>
        <img 
          src={style? "images/icon-moon.svg" : "images/icon-sun.svg"} 
          alt="the sun or the moon" 
          onClick={() => setStyle(!style)}
        />
      </div>

      <div className="inputArea">
        <div 
          className="circle"
          style= {
            style?
              { borderColor: "hsl(236, 33%, 92%)" } :
              { borderColor: "hsl(233, 14%, 35%)" }
          }
        >
        </div>
        <input 
          type="text" 
          placeholder="Create a new todo..."
          style={
            style? 
              {backgroundColor: "white", color: "black"} :
              {backgroundColor: "hsl(237, 14%, 26%)", 
               color: "hsl(234, 39%, 85%)"} 
          }
          onKeyDown = { input_Text_Hendler }
        />
      </div>

    </div>
  )

}

export default TasksHeader
