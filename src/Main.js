import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Bio from './Bio';
import Contact from './Contact'

//*this is the app frame, an invisible HTML element that acts as the container for your content; can include things like headers, footers, navigation, etc*//
 
class Main extends Component {
  render() {
    return (
     <HashRouter>
        <Routes>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
          <nav>
            <li><Link to="/">Bio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </nav>
          </ul>
          <div className="content">
         
            <Route path="/" component={Bio}/>
           
            <Route path="/contact" component={Contact}/>
          

             
          </div>
        </div>
        </Routes>
     </HashRouter>
    );
  }
}
 
export default Main;