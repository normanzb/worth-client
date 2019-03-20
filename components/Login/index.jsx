import React, { PureComponent } from 'react';
import Link from 'next/link';
import breakPoints from '../../util/breakPoints';
import fonts from '../../util/fonts';
import loginState from '../../util/loginState';
import Button from '../Button';
import Cross from '../../svgs/cross.svg';
import fetch from 'isomorphic-fetch';

function handleLogin() {
    var me = this;
    fetch('/auth/local', {
        method: 'POST',
        body: JSON.stringify({
            identifier: me.identifier.current.value,
            password: me.password.current.value
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(function(resp) {
        return resp.json();
    })
    .then(function(auth) {
        if (auth.user && auth.jwt) {
            console.log('Logged in');
            console.log('User profile', auth.user);
            console.log('User token', auth.jwt);
            loginState.jwt = auth.jwt;
            me.setState(function(prevState, prevProp){
                return {
                    message: null
                };
            });
            if (typeof me.props.onLoggedIn === 'function'){
                me.props.onLoggedIn();
            };
        }
        else {
            console.log('Login failed');
            me.setState(function(prevState, prevProp){
                return {
                    message: 'Login failed, ' + auth.message.charAt(0).toUpperCase() + auth.message.substr(1)
                };
            });
        }
    }, function(error){
        console.log('Network error:', error);
        me.setState(function(prevState, prevProp){
            return {
                message: 'Network error'
            };
        });
    });
}

function handleOnSubmit(evt) {
    evt.preventDefault();
    return handleLogin.call(this);
}

function handleContainerClick(evt) {
    evt.stopPropagation();
}

class Login extends PureComponent {
    constructor(...args) {
        super(...args);
        this.identifier = React.createRef();
        this.password = React.createRef();
        this.state = {
            message: null
        };
    }
    render() {
        var props = this.props;
        var state = this.state;
        var active = props.active;
        var me = this;

        return <div 
            className={[props.className?props.className:'', 'login', active?'active':''].join(' ')}
            onClick={props.onBackDropClick}>
            <style jsx>
            {`
                .login 
                {
                    display: flex;
                    
                    background-color: transparent;
                    justify-content: center;
                    align-items: center;
                }

                .login > .container
                {
                    background-color: #FFF;

                    position: relative;
                }

                .login > .container > .close 
                {
                    display: flex;
                    align-items: center;

                    height: 40px;
                }

                .login > .container > .close > :global(svg)
                {
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                }

                .login > .container > .inner
                {
                    margin: 30px;
                }

                .login > .container > .inner > .row 
                {
                    margin: 30px 0;
                    display: flex;

                    justify-content: flex-start;
                    align-items: center;
                }

                .login > .container > .inner > .row.row--message
                {
                    display: none;
                    background-color: #000;
                }

                .login > .container > .inner > .row.row--message.active
                {
                    display: flex;
                }

                .login > .container > .inner > .row.row--message > .inner 
                {
                    margin: 15px;
                    color: #FFF;
                    font: ${fonts.message}
                }

                .login > .container > .inner > .row.row--submit
                {
                    justify-content: space-between;
                }

                .forgot-password > a 
                {
                    display: inline-block;
                    color: inherit;
                    text-decoration: none;
                    position: relative;
                }

                .forgot-password > a:first-letter
                {
                    text-transform: uppercase;
                }

                .forgot-password > a:after 
                {
                    content: ' ';

                    position: absolute;
                    top: calc(100% + 2px);
                    left: 0;
                    right: 0;

                    height: 0;
                    border-top: 1px dashed #000;
                }

                .login > .container > .inner > .row > .inner 
                {

                }

                .login > .container > .inner > .row > .key
                {
                    font: ${fonts.key};
                }

                .login > .container > .inner > .row > .key:first-letter 
                {
                    text-transform: uppercase;
                }

                .login > .container > .inner > .row > .key:after
                {
                    content: ':';
                }

                .login > .container > .inner > .row > .sprt:after
                {
                    margin: 0 .5em;
                    content: ' ';
                }

                .login > .container > .inner > .row > .value
                {
                    flex-grow: 1;
                    flex-shrink: 0;
                }

                .login > .container > .inner > .row > .value > input
                {
                    border: none;
                    border-bottom: 1px solid #DEDEDE;
                    width: 100%;
                    height: 30px;
                    background-color: transparent;

                    font: ${fonts.value};
                }

                .login > .container > .inner > .row > .value > input:focus
                {
                    outline: none;
                }

                .login.active > .container > .inner > .row > .key,
                .login.active > .container > .inner > .row > .value
                {
                    display: inline-block;
                }

                @media (min-width: ${breakPoints.stage + 1}px) 
                {
                    .login 
                    {
                        visibility: hidden;

                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;

                        transition: background-color .2s, visibility .3s;
                    }

                    .login > .container
                    {
                        opacity: 0;
                        transition: opacity .3s;
                    }

                    .login > .container > .close 
                    {
                        width: 40px;
                        justify-content: center;
                        position: absolute;
                        right: -10px;
                        top: -10px;

                        border-radius: 50%;
                        background: #FFF;
                    }

                    .login > .container > .close > :global(svg)
                    {
                        width: 30%;
                        heighr: 30%;
                    }

                    .login > .container > .close:hover > :global(svg)
                    {
                        width: 40%;
                        heighr: 40%;
                    }

                    .login.active
                    {
                        visibility: visible;
                        backdrop-filter: blur(5px);
                        background-color: rgba(0,0,0,.8);
                    }

                    .login.active > .container 
                    {
                        opacity: 1;
                    }
                }

                @media (max-width: ${breakPoints.stage}px) 
                {
                    .login 
                    {
                        width: 100%;
                        overflow: hidden;

                        max-height: 0;

                        transition: max-height 1s ease-in-out;
                    }

                    .login > .container
                    {
                        width: 100%;

                        background-color: #EFEFEF;
                        overflow: hidden;
                    }

                    .login > .container > .close 
                    {
                        margin: 1em 0;
                        width: calc(100% - 2em);
                        padding: 0 1em;
                        justify-content: flex-end;
                    }

                    .login > .container > .close > :global(svg)
                    {
                        height: 100%;
                    }

                    .login.active
                    {
                        max-height: 360px;
                    }
                }
            `}
            </style>
            <div className='container' onClick={handleContainerClick}>
                <div className='close' onClick={props.onBackDropClick}>
                    <Cross />
                </div>
                <form className='inner' onSubmit={(evt)=>handleOnSubmit.call(me, evt)}>
                    <div className={['row', 'row--message', state.message?'active':''].join(' ')}>
                        <div className='inner'>{state.message}</div>
                    </div>
                    <div className='row row--identifier'>
                        <div className='key'>
                            email
                        </div>
                        <div className='sprt'></div>
                        <div className='value'>
                            <input name='identifier' type='text' ref={this.identifier} />
                        </div>
                    </div>
                    <div className='row row--password'>
                        <div className='key'>
                            password
                        </div>
                        <div className='sprt'></div>
                        <div className='value'>
                            <input type='password' ref={this.password}/>
                        </div>
                    </div>
                    <div className='row row--submit'>
                        <div className='forgot-password'><Link href='/forgot-password'><a>forgot password</a></Link></div> 
                        <Button onClick={()=>handleLogin.call(me)}>LOGIN</Button>
                    </div>
                </form>
            </div>
        </div>;
    }
}

export default Login;