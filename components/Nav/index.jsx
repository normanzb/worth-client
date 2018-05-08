import React, { PureComponent } from 'react';
import Link from 'next/link';
import Logo from '../../svgs/logo.svg';
import scrollingElement from '../../util/scrollingElement';
import breakPoints from '../../util/breakPoints';

function renderLink(href, text) {
    var className = '';
    var props = this.props;
    var pathname = props.pathname;
    if (pathname === href) {
        className = 'current';
    }
    return <li className={className}><Link href={href}><a>{text}</a></Link></li>;
}

class Nav extends PureComponent {
    handleGlobalScroll() {
        if (scrollingElement.scrollTop > 0) {
            document.documentElement.classList.add('scroll-top--off-top');
        }
        else {
            document.documentElement.classList.remove('scroll-top--off-top');   
        }
    }
    componentDidMount() {
        if (typeof window === 'undefined') {
            return;
        }

        window.addEventListener('scroll', this.handleGlobalScroll);
    }
    componentWillUnmount() {
        if (typeof window === 'undefined') {
            return;
        }

        window.removeEventListener('scroll', this.handleGlobalScroll);   
    }
    render() {
        var props = this.props;
        return <nav className={(props.className?props.className:'')}>
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

                    transition: height .6s ease-in-out;
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
                {renderLink.call(this, '/login', 'login')}
            </ul>
        </nav>;
    }
}

export default Nav;