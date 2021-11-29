import React from "react";
import './Menu.css';
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu col col--ld-12 col--md-12 col--tb-12  col--pn-12 col--sd-12 align--center">
        <nav>
            <ul className=" col col--ld-12 col--md-12 col--tb-12  col--pn-12 col--sd-12 align--center">
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/media">Media</Link>
                </li>
                <li>
                    <Link to="/align">Align</Link>
                </li>
                <li>
                    <Link to="/margin">Margin</Link>
                </li>
                <li>
                    <Link to="/padding">Padding</Link>
                </li>
                <li>
                    <Link to="/responsivo">Responsivo</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu;