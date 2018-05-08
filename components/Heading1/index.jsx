import React from 'react';
import fonts from '../../util/fonts';
import Thermometer from '../../svgs/thermometer-full.svg';

var Heading2 = (props) => {
    const Icon = props.icon?props.icon:Thermometer;
    return <div className={['heading1',(props.className?props.className:'')].join(' ')}>
        <style jsx>
        {`
            .heading1
            {
                font: ${fonts.heading};
                text-transform: uppercase;
                box-shadow: 0 2px 3px 0 rgba(0,0,0,0.2);
                overflow: hidden;
                position: relative;
                z-index: 2;
            }
            .heading1 > .inner 
            {
                margin: 30px;
            }
            .heading1 > .inner > :global(.icon)
            {
                width: 32px;
                height: 32px;
                vertical-align: middle;
                margin-right: 10px;
            }

            .heading1 > .inner > .text
            {
                margin-left: 10px;
                vertical-align: middle;
            }
        `}
        </style>
        <div className='inner'>
            <Icon className='icon' /><span className='text'>{props.children}</span>
        </div>
    </div>;
};

export default Heading2;