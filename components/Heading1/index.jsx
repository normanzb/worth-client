import React from 'react';
import fonts from '../../util/fonts';

var Heading1 = (props) => {
    return <div className={['heading1',(props.className?props.className:'')].join(' ')}>
        <style jsx>
        {`
            .heading1
            {
                font: ${fonts.heading};
                text-transform: uppercase;
                box-shadow: 0 2px 3px 0 rgba(0,0,0,0.2);
                overflow: hidden;
            }
            .heading1 > .inner 
            {
                margin: 30px;
            }
        `}
        </style>
        <div className='inner'>
            {'// ' + props.children}
        </div>
    </div>;
};

export default Heading1;