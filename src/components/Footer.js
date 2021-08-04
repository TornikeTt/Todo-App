const Footer = ( props ) => { 
  const { deta , setDeta , setStatus, style } = props
  
  const statusHandler = (e) => { 
    console.log(e.target.innerText)
    setStatus(e.target.innerText)
  }


  const Clear_Complated = () => { 
    setDeta(deta.filter( (todo) => todo.complate === false)) 
    // hear we delte all Complated Tasks 
  }

  return ( 
    <>
    <footer>
      <p> { deta.length } items left </p>
      <div>
        <p onClick= { statusHandler }> All </p>
        <p onClick={ statusHandler }> Active </p>
        <p onClick={ statusHandler }> Complated </p>
      </div>
      <p onClick= { Clear_Complated }> Clear Completed </p>
    </footer>

    <div className="show_only_mobileVersion" 
      style={
        style? 
          {backgroundColor: "white", color: "black"} :
          {backgroundColor: "hsl(237, 14%, 26%)", 
           color: "hsl(234, 39%, 85%)"} 
      }
    >
      <p onClick= { statusHandler }> All </p>
      <p onClick={ statusHandler }> Active </p>
      <p onClick={ statusHandler }> Complated </p>
    </div>

    </>
  );
}



export default Footer
