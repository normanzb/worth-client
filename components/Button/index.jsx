import React from 'react';
import fonts from '../../util/fonts';

var Button = (props) => {
    return <button 
        className={['button',(props.className?props.className:''), (props.disabled?'disabled':'')].join(' ')} 
        onClick={props.onClick}
        >
        <style jsx>
        {`
            .button
            {
                border: none;
                background: transparent;
                
                margin: 0 5px;
                padding: 0 8px;
                position: relative;
                font: ${fonts.button};
                
                text-transform: uppercase;
                overflow: visible;
                cursor: pointer;

                position: relative;
            }

            .button:before,
            .button:after
            {
                content: ' ';
                position: absolute;

                height: 9px;
                width: 2px;
                background-color: #000;
                
                transform: rotate(30deg);
            }

            .button:before
            {
                top: -1px;
                left: 0;
            }

            .button:after
            {
                bottom: -1px;
                right: 0;
            }
        `}
        </style>
        <div className='inner'>
            {props.children}
        </div>
    </button>;
};

export default Button;