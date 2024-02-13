import React from 'react'
import { NavLink } from 'react-router-dom'
import images from './imagesall'
export default function CustomerNavBar() {
  return (
    <div>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"> <img src={images.logo} alt="Food" className="img-fluid menu-image"  /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
      </li>
      <li  class="nav-item active">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Contact</a>
      </li>
      <li class="nav-item active" style={{'float':'right', 'paddingRight': '90px', 'position' : 'absolute', 'right': '0'}} >
        <a class="nav-link a" href="#">Profile</a>
      </li>
      <li class="nav-item active" style={{'float':'right', 'paddingRight': '20px', 'position' : 'absolute', 'right': '0'}} >
        <a class="nav-link a" href="#">Logout</a>
      </li>
    </ul>
  </div>
</nav>
  </div>
  )
}