import React from 'react';
import fonts from '../../util/fonts';

var Heading2 = (props) => {
    return <div className={['container',(props.className?props.className:'')].join(' ')} onClick={props.onClick}>
        <style jsx>
        {`
            .container
            {
                position: relative;
                top: 0;
                font: ${fonts.button};
                text-transform: uppercase;
                overflow: hidden;
                cursor: pointer;
                border-radius: 10px;
                box-shadow: 0 5px 0 0 #0d97d0, inset 0 0 30px 0 rgba(255,255,255,0.2), inset 0 1px 1px 0 rgba(255,255,255,0.7);
                background-color: #16a7e3;
                transition: all .3s ease-in-out;
            }
            .container:hover
            {
                box-shadow: 0 5px 0 0 #16a7e3, inset 0 0 30px 0 rgba(255,255,255,0.2), inset 0 1px 1px 0 rgba(255,255,255,0.7);
                background-color: #08aff5;
            }
            .container:active
            {
                top: 3px;
                box-shadow: 0 2px 0 0 #16a7e3, inset 0 0 30px 0 rgba(255,255,255,0.2), inset 0 1px 1px 0 rgba(255,255,255,0.7);
            }
            .container:before 
            {
                content: '';
                display: block;
                position: absolute;
                left: 40%;
                top: 0;
                right: 40%;
                height: 1px;
                box-shadow: 0 0 80px 10px rgba(255,255,255,.8);
            }
            .container:before::hover
            {
                box-shadow: 0 0 100px 20px rgba(255,255,255,1);
            }
            .container > .inner 
            {
                color: #FFF;
                border: none;
                height: 50px;
                padding: 0 30px;

                text-align: center;
                text-shadow: -1px -1px 0 rgba(0,0,0,0.3);

                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}
        </style>
        <div className='inner'>
            {props.children}
        </div>
    </div>;
};

export default Heading2;