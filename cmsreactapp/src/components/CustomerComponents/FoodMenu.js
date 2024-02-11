import React from 'react'
import './FoodMenu.css'
import images from './imagesall'
export default function FoodMenu() {


  return (
    <div className="container">
    <div className="component">
      <div className="content">
        {/* Your content here */}
        {/* This content will scroll if it exceeds the component size */}
        {/* Example content */}
        <img src={images.tea} alt="tea" height={200} width={450} />
        <button type="button" class="btn btn-primary" id='btn'>Add</button>

      {/* </div> */}
      {/* <div className="content2"> */}
         <img src={images.samosa} alt="samosa" height={200} width={450}  />
         <button type="button" class="btn btn-primary" id='btn'>Add</button>

      {/* </div> */}
      {/* <div className="content3"> */}
        <img src={images.coffee} alt="coffee" height={200} width={450}/>
        <button type="button" class="btn btn-primary" id='btn'>Add</button>

        {/* </div> */}
      {/* <div className="content4"> */}
        <img src={images.vadapav} alt="vadapav" height={200} width={450} />
        <button type="button" class="btn btn-primary" id='btn'>Add</button>

      </div>
    </div>
  </div>
  )
}
