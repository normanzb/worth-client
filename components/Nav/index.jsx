import React from 'react';
import Logo from '../../svgs/logo.svg';

var Nav = (props) => <nav className={(props.className?props.className:'')}>
    <style jsx>
    {`
        nav 
        {
            height: 100px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            background: #fff;

            width: 40%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
        }
        nav > .logo-container
        {
            margin: 32px;
        }
        nav > .logo-container > :global(svg.logo)
        {
            height: 48px;
            width: 48px;
        }
        .menu-items
        {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-grow: 1;

            padding: 0;
        }
        .menu-items > li
        {
            display: block;
            font: normal normal 400 18px/1 Roboto;
            text-transform: uppercase;
            cursor: pointer;
        }
    `}
    </style>
    <div className='logo-container'>
        <Logo className='logo' />
    </div>
    <ul className='menu-items'>
        <li>explore</li>
        <li>on going</li>
        <li>ended</li>
    </ul>
</nav>;

export default Nav;