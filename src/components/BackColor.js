const BackColor = ({ style }) => { 
  return ( 
      <div 
        className="back-color" 
        style={ style? 
          { backgroundColor: "hsl(236, 33%, 92%)" } : 
          { backgroundColor: "black" } } >
      </div>
  )
}


export default BackColor
