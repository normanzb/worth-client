import React, { PureComponent } from 'react';
import Link from 'next/link';
import Logo from '../../svgs/logo.svg';
import Login from '../Login';
import scrollingElement from '../../util/scrollingElement';
import breakPoints from '../../util/breakPoints';
import loginState from '../../util/loginState';

var HIDE_WHEN_LOGIN_CLASS_NAME = 'hide-when-logged-in';

function renderLink(href, text, additionalClassName) {
    var className = '';
    var props = this.props;
    var pathname = props.pathname;

    if (pathname === href) {
        className = 'current';
    }

    if (additionalClassName) {
        className = className + ' ' + additionalClassName;
    }
    return <li className={className}><Link href={href}><a>{text}</a></Link></li>;
}

function handleClickLogin() {
    this.setState(function(prevState, prevProp){
        return {
            loginToggle: !prevState.loginToggle
        };
    });
}

function handleLoggedIn() {
    this.setState(function(prevState, prevProp){
        return {
            loginToggle: false
        };
    });
}

function handleLoginBackDropClick() {
    this.setState(function(prevState, prevProp){
        return {
            loginToggle: false
        };
    });
}

function updateLoginStatus(jwt) {
    var me = this;

    console.log(jwt);

    if (jwt == null) {
        return;
    }
    me.setState(function(prevState){
        return {
            loggedIn: true
        };
    });
}

class Nav extends PureComponent {
    constructor(...args) {
        super(...args);
        var me = this;
        me.state = {
            loginToggle: false,
            loggedIn: false
        };
        me.handleJWTChange = function(jwt){
            updateLoginStatus.call(me, jwt);   
        };
    }
    handleGlobalScroll() {
        if (scrollingElement.scrollTop > 0) {
            document.documentElement.classList.add('scroll-top--off-top');
        }
        else {
            document.documentElement.classList.remove('scroll-top--off-top');   
        }
    }
    componentDidMount() {
        var me = this;

        if (typeof window === 'undefined') {
            return;
        }

        window.addEventListener('scroll', this.handleGlobalScroll);

        if (loginState.jwt) {
            updateLoginStatus.call(me, loginState.jwt);
        }

        loginState.on('jwt', me.handleJWTChange);
    }
    componentWillUnmount() {
        var me = this;

        loginState.off('jwt', me.handleJWTChange);

        if (typeof window === 'undefined') {
            return;
        }

        window.removeEventListener('scroll', this.handleGlobalScroll);   
    }
    render() {
        var props = this.props;
        var state = this.state;
        return <nav className={[
                props.className?props.className:'', 
                state.loggedIn?'logged-in':''
            ].join(' ')}>
            <style jsx>
            {`
                nav 
                {
                    
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    background: #fff;

                    width: 40%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 3;

                    transition: height .6s ease-in-out;
                    flex-wrap: wrap;
                }

                nav.logged-in :global(.${HIDE_WHEN_LOGIN_CLASS_NAME})
                {
                    display: none !important;
                }

                nav > .logo-container
                {
                    margin: 32px;
                }
                nav > .logo-container > :global(svg.logo)
                {
                    height: 48px;
                    width: 48px;
                    transition: all .6s ease-in-out;
                    margin-left: 0;
                    cursor: pointer;
                }
                .menu-items
                {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    flex-grow: 1;

                    padding: 0;
                }
                .menu-items > :global(li)
                {
                    display: block;
                    font: normal normal 400 18px/1 Roboto;
                    text-transform: uppercase;
                    cursor: pointer;
                }

                .menu-items > :global(li.current) > :global(a)
                {
                    color: #ABABAB;
                    position: relative;
                }

                .menu-items > :global(li.current) > :global(a):after 
                {
                    display: block;
                    content: ' ';
                    position: absolute;
                    top: 100%;
                    height: 2px;
                    background-color: #ABABAB;
                }

                .menu-items > :global(li) > :global(a)
                {
                    color: inherit;
                    text-decoration: none;
                }

                @media (min-width: ${breakPoints.stage + 1}px) 
                {
                    nav
                    {
                        height: 100px;
                    }

                    :global(html.scroll-top--off-top) nav 
                    {
                        height: 70px;
                    }
                    :global(html.scroll-top--off-top) nav > .logo-container > :global(svg.logo)
                    {
                        height: 32px;
                        width: 32px;

                        margin-left: 8px;
                    }
                }

                @media (max-width: ${breakPoints.stage}px) 
                {
                    nav 
                    {
                        width: 100%;
                        position: relative;
                    }
                }
            `}
            </style>
            <div className='logo-container'>
                <Link href='/'><Logo className='logo' /></Link>
            </div>
            <ul className='menu-items'>
                {renderLink.call(this, '/', 'explore')}
                {renderLink.call(this, '/ended', 'ended')}
                <li className={HIDE_WHEN_LOGIN_CLASS_NAME} onClick={()=>handleClickLogin.call(this)}><a>login</a></li>
                {renderLink.call(this, '/sign-up', 'sign up', HIDE_WHEN_LOGIN_CLASS_NAME)}
            </ul>
            <Login active={state.loginToggle} onBackDropClick={()=>handleLoginBackDropClick.call(this)} onLoggedIn={()=>handleLoggedIn.call(this)} />
        </nav>;
    }
}

export default Nav;