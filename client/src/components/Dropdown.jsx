import React from 'react';

// Mvp options for user display

const Dropdown = ( props ) => {
  return (
    <div className="dropdown">
      {console.log(this.props)}
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Select your options
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a className="dropdown-item" href="#">Taco Bell</a></li>
        <li><a className="dropdown-item" href="#">Fridays</a></li>
        <li><a className="dropdown-item" href="#">eat in</a></li>
      </ul>
    </div>
  )
}


export default Dropdown;