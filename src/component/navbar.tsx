import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaFilter } from 'react-icons/fa'
import { TiThMenu } from 'react-icons/ti'
import './navbar.css'


interface NavbarProps {
    title?: string;
}  

type NavbarState = {
    open: boolean;
}

class Navbar extends Component<NavbarProps, NavbarState> {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.setState({
            open: false
        });
    }

    handleClick() {
        if(this.state.open) {
            this.setState({
                open: false
            });
        }
        else {
            this.setState({
                open: true
            });
        }
    }

    render () {
        return (
            <div className="navbar">
                <div className='left-navbar'>
                    <img className='logo' src="https://github.com/chelseyywang/pinstagrad/blob/master/pinstagrad.png?raw=true" alt='logo'/>
                    <p className='navbar-title'>{this.props.title}</p>
                </div>
                <div className='right-navbar'>
                    <button className='navbar-icon' >
                        <FaHeart size='40' color='#6AAAD8'/>
                    </button>
                    <button className='navbar-icon' >
                        <FaFilter size='40' color='#6AAAD8'/>
                    </button> 
                    <button onClick={this.handleClick} className='navbar-icon' >
                        <TiThMenu size='40' color='#6AAAD8'/>
                    </button>
                    {
                        this.state.open
                        ? (
                            <div className="navbar-menu">
                                <div className="navbar-menu-options">
                                    <Link to="/"><button className="navbar-menu-choice">home</button></Link>
                                    <Link to="/profile"><button className="navbar-menu-choice">profile</button></Link>
                                    <Link to="/upload"><button className="navbar-menu-choice">upload</button></Link>
                                    <Link to="/register"><button className="navbar-menu-choice">register</button></Link>
                                    <Link to="/logout"><button className="navbar-menu-choice">logout</button></Link>
                                </div>
                            </div>
                        )
                        : (
                          null
                        )
                    }       
                </div>
            </div>
        )
    }
}

export default Navbar;