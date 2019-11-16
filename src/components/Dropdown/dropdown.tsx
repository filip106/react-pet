import React from "react";
import './dropdown.css';
import {Link} from "react-router-dom";

class Dropdown extends React.Component <{
    name: String;
}>{
    render() {
        const name = this.props.name;
        const linkToDogs = '/' + name + '/Dogs';
        const linkToCats = '/' + name + '/Cats';
        const linkToOthers = '/' + name + '/Others';
        return (
            <nav className="menu-item">
                <a>{name}</a>
                <ul className="sub-menu">
                    <Link to={linkToDogs} className="menu-item" onClick={() => this.handleSelect('d')}>Psi</Link>
                    <Link to={linkToCats} className="menu-item" onClick={() => this.handleSelect('c')}>Macke</Link>
                    <Link to={linkToOthers} className="menu-item" onClick={() => this.handleSelect('o')}>Ostalo</Link>
                </ul>
            </nav>
        )
    }

    handleSelect = (value: String) => {
        console.log(value);
    };

}

export default Dropdown;