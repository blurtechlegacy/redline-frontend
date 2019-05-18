import React from 'react';
export default class PLACEHOLDER extends React.Component{
 render(){
  return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       <a className="navbar-brand" href="#">Navbar</a>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
         <li className="nav-item">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
         </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
         </li>
        </ul>
       </div>
      </nav>
  );
 }
}
