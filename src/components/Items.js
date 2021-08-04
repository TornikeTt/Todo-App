const Items = (props) => { 
  const { style ,  deta , setDeta , fullDeta } = props


  const deleteHendler = ( id ) => { 
    let newDeta = fullDeta.filter((singleTask) => singleTask.id !== id)
    setDeta(newDeta)
  }
   
  const complateHendler = () => { 

    setDeta( fullDeta.map(item => { 
      if(item.id === deta.id) { 
        return {...item,  complate: !item.complate  }
      } 

      return item
    }))

  }


  return (  
    <> 
    <li className="each_task" > 

      <div className="checkbox_circle" 
        style={ style?
          { borderColor: "hsl(236, 33%, 92%)" } :
          { borderColor: "hsl(233, 14%, 35%)" } } > 

        <div 
          className={`check ${ deta.complate ? "backgLinear" : ""}  
            ${ style ? "checkWhite" : "checkBlack"} `}
          onClick={ complateHendler }  > 
          <img 
            src="images/icon-check.svg" 
            alt="check" 
            style={ deta.complate ? {display: "block"} : {display: "none"} } 
          /> 
        </div>

      </div>

      <p className={ deta.complate ? "complate" : ""}
        style={ style? 
        {color: "black"} :
        {color: "hsl(234, 39%, 85%)"} } 
        onClick = { complateHendler }
      > 
        {deta.text}
      </p>

      <div className="crossIcone" onClick={() => deleteHendler(deta.id)} >
      <img  src="images/icon-cross.svg" alt="cross icone" />
    </div>

    </li>

    <div className="line"></div>
    </>
  )

}

export default Items 

