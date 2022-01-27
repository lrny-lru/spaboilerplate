
import React, { Component } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Bio from './components/Bio';
import Contact from './components/Contact'

//*this is the app frame, an invisible HTML element that acts as the container for your content; can include things like headers, footers, navigation, etc*//

class Main extends Component {
  render() {
    return (

      <div>

        <main>
          <h1>Ingrid Nora Knight</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>

            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          <div className="routes">

            <Routes>
              

                  <Route path="/" element={<Bio />}
                  />

                  <Route path="/contact" element={<Contact />}
                />

            </Routes>

          </div>
        </main>

      </div>

    );
  }
}

export default Main;