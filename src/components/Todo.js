import React , { useState , useEffect } from "react";
import TasksHeader from "./TasksHeader"
import Items from "./Items"
import Footer from "./Footer"

const Todo = ( {style , setStyle} ) => { 
  // takse is default "tasks" is justs show every time when user go to on 
  // Todo list 
  const tasks  = [ 
    {id: 1, text: "Jog around the park 3x", complate: false},
    {id: 2, text: "10 minutes meditation", complate: false},
    {id: 3, text: "Read for 1 hour", complate: false},
    {id: 4, text: "Pick up groceries", complate: false},
    {id: 5, text: "Complete Todo App on Frontend Mentor", complate: false},
  ]

  const [ deta , setDeta ] = useState(tasks); /* take all default tasks, also
  it's main deta where we filter which kind of todo list should stay or filter
  */

  const [ status , setStatus  ] = useState("all"); /* 
    status is indicator how to filter todo list it's only could have 3 state
     1. Complated
     2. Active 
     3. default = all
  */
  const [ filteredTodos, setFilteredTodos ] = useState([]); /* 
    filterTodos we use to show and display correct deta from deta hook
    for fillter job we use state hook and filter deta hook
  */
  
  /* useEffect we use for to run filterHandler function every time when 
   * 1. deta(main deta) hook change
   * 2. when status hook changi 
  */
  useEffect(() => { 
    filterHandler()
  }, [ status, deta ])

  const filterHandler = (s) => { 
    switch( status ) { 
      case "Complated":
        console.log("Complated")
        setFilteredTodos(deta.filter( (todo) => todo.complate === true))
        break;
      case "Active": 
        console.log("Active")
        setFilteredTodos(deta.filter( (todo) => todo.complate === false ))
        break;
      default: 
        console.log("default")
        setFilteredTodos(deta)
        break;
    }
  }

  return ( 
    <section>
      <TasksHeader  // inside TaskHeader we have input
        style={style} 
        setStyle={setStyle} 
        fullDeta = { deta }
        setDeta = { setDeta }
      />

    <article 
      style= {
        style? 
        { backgroundColor: "hsl(0, 0%, 98%)" } : 
        { backgroundColor: "hsl(237, 14%, 26%)" }
      } >

      <ul className="tasks" >

        { 
          filteredTodos.map((task) => { 
            return ( 
              <Items 
                key= { task.id }
                setStyle={ setStyle }
                style={ style } 
                deta = { task } 
                setDeta = { setDeta }
                fullDeta = { deta } // here is all deta(main deta)
              />
            )
          })
        }

      </ul>

      <Footer 
        deta ={ deta } 
        setDeta = { setDeta }
        setStatus = { setStatus }
        style = { style }
      /> 
    </article>

    </section>
  )
}


export default Todo
