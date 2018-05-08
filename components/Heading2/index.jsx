import React from 'react';
import fonts from '../../util/fonts';
import Comment from '../../svgs/comment.svg';

var Heading1 = (props) => {
    return <div className={['heading2',(props.className?props.className:'')].join(' ')}>
        <style jsx>
        {`
            .heading2
            {
                font: ${fonts.heading2};
                text-transform: uppercase;
            }
            .heading2 > .inner 
            {
                margin: 30px;
            }
            .heading2 > .inner > :global(.icon)
            {
                width: 32px;
                height: 32px;
                vertical-align: middle;
                margin-right: 10px;
            }

            .heading2 > .inner > .text
            {
                margin-left: 10px;
                vertical-align: middle;
            }
        `}
        </style>
        <div className='inner'>
            <Comment className='icon' /><span className='text'>{props.children}</span>
        </div>
    </div>;
};

export default Heading1;