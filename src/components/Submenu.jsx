import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { StateStore } from './StateStore';

function Submenu({ item }) {
    const dropdown = StateStore(state => state.dropdown);

    const toggleDropdown = () => {
        StateStore.setState({ dropdown: !dropdown });
    };

    return (
        <div className="text-white font-bold mt-4">
            <NavLink to={item.path} onClick={item.subNav && toggleDropdown}>
                <div className='flex items-center'>
                    {item.icon}
                    <h2>{item.title}</h2>
                </div>
                <div>
                    {item.subNav && dropdown
                        ? item.iconOpen
                        : item.subNav
                            ? item.iconClose
                            : null
                    }
                </div>
            </NavLink>

            {dropdown && item.subNav && item.subNav.map((subItem, index) => (
                <Link to={subItem.path} key={index}>
                    {subItem.icon}
                    <h2>{subItem.title}</h2>
                </Link>
            ))}
        </div>
    );
}

export default Submenu;
