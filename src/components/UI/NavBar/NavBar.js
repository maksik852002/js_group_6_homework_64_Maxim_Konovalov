import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

class NavBar extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render = () => {
    let show = "collapse navbar-collapse justify-content-end";
    this.state.clicked && (show += " d-block");
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://p.w3layouts.com/demos/port/web/images/logo.png"
              alt="logo"
            />
          </NavLink>
          <Button
            label={<span className="navbar-toggler-icon"></span>}
            type="button"
            addClass="navbar-toggler"
            click={this.handleClick}
          />
          <div className={show}>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  To Do List<span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movie-tracking">
                  Movie Tracker
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/notes">
                  Personal Notes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
}

export default NavBar;
