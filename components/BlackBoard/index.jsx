import React from 'react';
import ProgressBarEmpty from '../ProgressBar';
import ProgressBarWhite from '../ProgressBarWhite';
import ProgressBarBlue from '../ProgressBarBlue';
import ProgressBarRed from '../ProgressBarRed';
import ToolTipEmpty from '../ToolTip';

var BlackBoard = (props) => (
    <figure 
        className={(props.className?props.className:'') + ' black-board'}>
        <style jsx>
        {`
            .black-board 
            {
                margin: 0;
                background: #000;
                color: #FFF;
            }
            .black-board > .inner
            {
                margin: 28px;
            }
            .black-board > .inner > figcaption 
            {
                font: normal normal 500 48px/1 Roboto;
                text-transform: uppercase;
            }
            .black-board > .inner > p 
            {
                font: normal normal 400 20px/1 Tahoma;
                width: 80%;
            }
            .black-board > .inner > p:first-letter 
            {
                text-transform: uppercase;    
            }
            .promotion-details
            {
                display: flex;
                position: relative;

                padding-bottom: 60px;
            }
            .promotion-details > :global(.tool-tip-empty)
            {
                position: absolute;
                left: 0;
                bottom: 0;
            }
            .progress > .caption
            {
                margin: 1em 0;
                font: normal normal 400 12px/1 Tahoma;
            }
            .progress > .bars 
            {
                display: flex;
            }
        `}
        </style>
        <div className='inner'>
            <figcaption>
                {props.caption}
            </figcaption>
            <p>
                {props.content}
            </p>
            <div className='promotion-details'>
                <ProgressBarEmpty starting={true} width='33%'/>
                <ProgressBarWhite width='33%' />
                <ProgressBarBlue ending={true} width='33%' />
                <ToolTipEmpty className='tool-tip-empty' text='33% Discount' />
            </div>
            <div className='progress'>
                <div className='caption'>
                    Progress    
                </div>
                <div className='bars'>
                    <ProgressBarEmpty starting={true} width='80%'/>
                    <ProgressBarRed ending={true} width='30%' />
                </div>
            </div>
        </div>
    </figure>
);

export default BlackBoard;