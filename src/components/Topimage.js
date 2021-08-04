const Topimage = (props) => { 
  /* 
   * here we have main pictures which toggle based on style is true or false
   * true = light background color and image
   * false = black background color and image
  */
  return ( 
    <picture> 
      <source 
        media="(max-width: 375px)" 
        srcSet= {
          props.style? 
          "images/bg-mobile-light.jpg" : "images/bg-mobile-dark.jpg" 
        } 
      />

      <img 
        className="back_image" 
        src= {
          props.style? 
          "images/bg-desktop-light.jpg" : "images/bg-desktop-dark.jpg" 
        } 
        alt="for background" 
      />
    </picture>
  );

}

export default Topimage
