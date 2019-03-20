import React from 'react';
import fonts from '../../util/fonts';

var CTA = (props) => {
    var shadowHeight = 5;
    return <div 
        className={['cta',(props.className?props.className:''), (props.disabled?'disabled':'')].join(' ')} 
        onClick={props.onClick}
        >
        <style jsx>
        {`
            .cta
            {
                position: relative;
                top: 0;
                font: ${fonts.cta};
                text-transform: uppercase;
                overflow: hidden;
                cursor: pointer;
                border-radius: 10px;
                box-shadow: 0 ${shadowHeight}px 0 0 #0d97d0, inset 0 0 30px 0 rgba(255,255,255,0.2), inset 0 1px 1px 0 rgba(255,255,255,0.7);
                background-color: #16a7e3;
                transition: all .3s ease-in-out;

                margin-botto: ${shadowHeight}px;
            }
            .cta:hover
            {
                box-shadow: 0 ${shadowHeight}px 0 0 #16a7e3, inset 0 0 30px 0 rgba(255,255,255,0.2), inset 0 1px 1px 0 rgba(255,255,255,0.7);
                background-color: #08aff5;
            }
            .cta:active
            {
                top: 3px;
                box-shadow: 0 2px 0 0 #16a7e3, inset 0 0 30px 0 rgba(255,255,255,0.2), inset 0 1px 1px 0 rgba(255,255,255,0.7);
            }
            .cta:before 
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
            .cta:before::hover
            {
                box-shadow: 0 0 100px 20px rgba(255,255,255,1);
            }
            .cta > .inner 
            {
                color: #FFF;
                border: none;
                min-height: 60px;
                padding: 0 30px;

                text-align: center;
                text-shadow: -1px -1px 0 rgba(0,0,0,0.3);

                display: flex;
                justify-content: center;
                align-items: center;
            }

            .cta.disabled
            {
                background-color: #EFEFEF;
                box-shadow: 0 ${shadowHeight}px 0 0 #DFDFDF, inset 0 0 30px 0 rgba(255,255,255,0.2), inset 0 1px 1px 0 rgba(255,255,255,0.7);
            }
            .cta.disabled > .inner 
            {
                color: #999;
                text-shadow: none;
            }
            .cta.disabled:active
            {
                top: 0;
                box-shadow: 0 ${shadowHeight}px 0 0 #DFDFDF, inset 0 0 30px 0 rgba(255,255,255,0.2), inset 0 1px 1px 0 rgba(255,255,255,0.7);
            }
        `}
        </style>
        <div className='inner'>
            {props.children}
        </div>
    </div>;
};

export default CTA;