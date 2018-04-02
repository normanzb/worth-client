import React from 'react';
import BlackBoard from '../BlackBoard';

var Stage = (props) => (
    <div 
        className={(props.className?props.className:'') + ' stage'}
        style={{backgroundImage: 'url("./static/test-hurrican-stage.jpg");'}}>
        <style jsx>
        {`
            .stage 
            {
                display: flex;
                justify-content: flex-end;
                background-color: #cfcfcf;
                background-size: cover;
                background-position: 50% 50%;
                position: relative;

                height: 620px;
                max-height: 90vh;
            }
            .stage > :global(.black-board) 
            {
                position: absolute;
                bottom: 5%;
                right: 3%;
                max-width: 40%;
            }
        `}
        </style>
        <BlackBoard 
            className='black-board' 
            caption='hurricane canless air system'
            content='the duster of choice for the keyboard community'
            />
    </div>
);

export default Stage;