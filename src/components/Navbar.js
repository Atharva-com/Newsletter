import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
    static defaultProps = {
        title: 'Title'
    }

    static propsTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg bg-dark navbar-dark fixed-top`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand text-warning" to="/">{this.props.title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link style={{cursor: 'pointer', fontSize: '1.1rem', paddingRight: '1rem'}} className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{cursor: 'pointer', fontSize: '1.1rem', paddingRight: '1rem'}} className="nav-link text-danger" to="/About">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{cursor: 'pointer', fontSize: '1.1rem', paddingRight: '1rem'}} className="nav-link text-danger" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{cursor: 'pointer', fontSize: '1.1rem', paddingRight: '1rem'}} className="nav-link text-danger" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{cursor: 'pointer', fontSize: '1.1rem', paddingRight: '1rem'}} className="nav-link text-danger" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{cursor: 'pointer', fontSize: '1.1rem', paddingRight: '1rem'}} className="nav-link text-danger" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{cursor: 'pointer', fontSize: '1.1rem', paddingRight: '1rem'}} className="nav-link text-danger" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{cursor: 'pointer', fontSize: '1.1rem', paddingRight: '1rem'}} className="nav-link text-danger" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{cursor: 'pointer', fontSize: '1.1rem', paddingRight: '1rem'}} className="nav-link text-danger" to="/technology">Technology</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-warning" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar