import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    state = {
        isActive: false
    };

    toggleNav = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
    };

    render() {
        return (
            <nav className="navbar" style={{ borderBottom: "solid 1px #dddddd" }}>
                <div className="navbar-brand">
                    <NavLink className="navbar-item" to="/" activeClassName="is-active">
                        <span>Markus Azer</span>
                    </NavLink>
                    <button className="button navbar-burger" onClick={this.toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                    </button>
                </div>

                <div className={ this.state.isActive ? "navbar-menu is-active" : "navbar-menu" }>
                    <div className="navbar-start">
                        <NavLink className="navbar-item" to="/about" activeClassName="is-active">
                            <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                                <i className="fas fa-code" />
                            </span>
                            About
                        </NavLink>

                        <NavLink className="navbar-item" to="/projects" activeClassName="is-active">
                            <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                                <i className="fas fa-project-diagram" />
                            </span>
                            Projects
                        </NavLink>

                        <NavLink className="navbar-item" to="/blog" activeClassName="is-active">
                            <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                                <i className="fab fa-blogger-b" />
                            </span>
                            Blog
                        </NavLink>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <span className="icon" style={{ color: "#0077B5", marginRight: 3 }}>
                                <i className="fas fa-lg fa-map-marker-alt" />
                            </span>
                            Cairo, EG
                        </div>

                        <div class="navbar-item">
                            <div class="buttons">

                                <a className="navbar-item" href="mailto:markusgihady@gmail.com">
                                    <span className="icon" style={{ color: "#0077B5", marginLeft: 3 }}>
                                        <i className="fas fa-lg fa-envelope-square" />
                                    </span>
                                </a>

                                <a className="navbar-item" href="https://www.linkedin.com/in/markusazer" target="_blank">
                                    <span className="icon" style={{ color: "#0077B5", marginLeft: 3 }}>
                                        <i className="fab fa-lg fa-linkedin" />
                                    </span>
                                </a>
                                <a className="navbar-item" href="https://github.com/MarkusAzer" target="_blank">
                                    <span className="icon" style={{ color: "#0077B5", marginLeft: 3 }}>
                                        <i className="fab fa-lg fa-github" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
