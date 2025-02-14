import React from 'react';
import './App.css';
import axios from 'axios';
import Dropdown from '../Dropdown/dropdown.tsx'
import {BrowserRouter as Router} from "react-router-dom";

class NavBar extends React.Component {
    constructor() {
        super();
        this.state={
            menu_class: '',
        }
    }

    componentDidMount(){
        let self = this;
        axios.get('http://localhost:8090/api/cats')
            .then(function (response) {
                console.log(response);
                self.setState({name:response.data[1].name})
            });
    }

    setToggleTopMenuClass = () => {
        if (this.state.menu_class === '') {
            this.setState({
                menu_class: 'toggled',
            })
        } else {
            this.setState({
                menu_class: '',
            })
        }
    }

    render(){
        let top_menu_class = `top-menu ${this.state.menu_class}`;

        return (
            <Router>
                <div className={top_menu_class} >
                    <img src='/static/media/logo.25bf045c.svg' alt='LOGO' className='logo'/>
                    <div className='left'>
                        <div><Dropdown name='Parenje'/></div>
                        <div><Dropdown name='Prodaja'/></div>
                    </div>
                    <div className='right'>
                        <div>Log in</div>
                        <div>Sing up</div>
                    </div>
                    <button className='top-menu-icon' onClick={this.setToggleTopMenuClass}></button>
                    <div className='clear-fix'></div>
                </div>
            </Router>
        );
    }
}

export default NavBar;