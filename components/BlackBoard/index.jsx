import React from 'react';
import ProgressBarEmpty from '../ProgressBar';
import ProgressBarWhite from '../ProgressBarWhite';
import ProgressBarBlue from '../ProgressBarBlue';
import ProgressBarRed from '../ProgressBarRed';
import ToolTipEmpty from '../ToolTip';
import ToolTipWhite from '../ToolTipWhite';
import ToolTipBlue from '../ToolTipBlue';
import ToolTipRed from '../ToolTipRed';
import currency from '../../util/currency';

var BlackBoard = (props) => {
    var discountPC = Math.round(props.discount / props.price * 10000) / 100;
    var cashbackPC = Math.round(props.cashback / props.price * 10000) / 100;
    var actualPay = props.price - props.cashback - props.discount;
    var actualPayPC = Math.round(actualPay / props.price * 10000) / 100;
    var currencySymbol = currency.symbol(props.currency);
    var quotaAvailablePC = Math.round((props.quota - props.taken) / props.quota * 10000) / 100;
    var quotaTakenPC = Math.round(props.taken / props.quota * 10000) / 100;

    return <figure 
        className={['black-board', (props.className?props.className:''), props.theme?'theme-' + props.theme:''].join(' ')}>
        <style jsx>
        {`
            .black-board 
            {
                margin: 0;
                background: #000;
                color: #FFF;
            }
            .black-board.theme-light 
            {
                background: #2E2E2E;
                opacity: .9;
            }
            .black-board > .inner
            {
                margin: 28px;
            }
            .black-board > .inner > figcaption 
            {
                font: normal normal 500 36px/1 Roboto;
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
            .promotion-details > .bars,
            .progress > .bars 
            {
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;

                padding-bottom: 60px;
            }
            .promotion-details > .bars > :global(.tool-tip),
            .progress > .bars > :global(.tool-tip)
            {
                position: absolute;
                bottom: 0;
            }
            .promotion-details > .caption,
            .progress > .caption
            {
                margin: 1em 0;
                font: normal normal 600 12px/1 Tahoma;
            }
            .promotion-details > .bars > :global(.tool-tip-empty)
            {
                left: 0;
            }
            .promotion-details > .bars > :global(.tool-tip-white)
            {
            }
            .promotion-details > .bars > :global(.tool-tip-blue)
            {
                right: 0;
            }
            .progress > .bars > :global(.tool-tip-red)
            {
                right: 0;
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
                <div className='caption'>
                    Price Break Down:
                </div>
                <div className='bars'>
                    <ProgressBarEmpty starting={true} width={discountPC + '%'}/>
                    <ProgressBarWhite width={cashbackPC + '%'} />
                    <ProgressBarBlue ending={true} width={actualPayPC + '%'} />
                    <ToolTipEmpty className='tool-tip-empty' text={`${discountPC}% Discount (${currencySymbol + props.discount})`} />
                    <ToolTipWhite className='tool-tip-white' text={`${cashbackPC}% Cashback (${currencySymbol + props.cashback})`} />
                    <ToolTipBlue className='tool-tip-blue' text={`You pay only ${currencySymbol}${actualPay}`} />
                </div>
            </div>
            <div className='progress'>
                <div className='caption'>
                    Remaining Slots:
                </div>
                <div className='bars'>
                    <ProgressBarEmpty starting={true} width={quotaTakenPC + '%'}/>
                    <ProgressBarRed ending={true} width={quotaAvailablePC + '%'} />
                    <ToolTipRed className='tool-tip-red' text={quotaAvailablePC + '% left'} />
                </div>
            </div>
        </div>
    </figure>;
};

export default BlackBoard;