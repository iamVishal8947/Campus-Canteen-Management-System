
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './FoodMenu.css';
// import images from './imagesall';

// export default function FoodMenu() {
  
//   return (
//     <div className="container">
//       <div className="row">
//         <div id="innerdiv" className="col-md-6">
//           <Link to="/MenuList" className="menu-item">
//             <img src={images.samosa} alt="Food" className="img-fluid menu-image"  />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import './FoodMenu.css';
import images from './imagesall';

export default function FoodMenu() {
  return (
    <div className="container food-menu">
      <div className="row">
        <div id="innerdiv" className="col-md-6">
          <Link to="/MenuList" className="menu-item">
            <img src={images.samosa} alt="Food" className="img-fluid menu-image" style={{ width: '100%', height: 'auto' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}