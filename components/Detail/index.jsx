import React, { PureComponent } from 'react';
import Link from 'next/link';
import breakPoints from '../../util/breakPoints';
import Heading2 from '../Heading2';
import Button from '../Button';
import BlackBoard from '../BlackBoard';
import fonts from '../../util/fonts';
import breakdown from '../../util/breakdown';
import currency from '../../util/currency';
import { Markdown } from 'react-showdown';

const margin = '20px 30px';

class Detail extends PureComponent {
    render() {
        var props = this.props;
        var campaign = props.campaign;
        var { downPayment, actualPay } = breakdown(campaign);
        var currencySymbol = currency.symbol(campaign.currency);
        var end = new Date(campaign.end);

        function renderBlackBoard() {
            return end < Date.now()?
                <BlackBoard 
                    className='black-board col' 
                    caption={campaign.item.name}
                    content={campaign.item.brief}
                    price={campaign.price}
                    discount={campaign.discount}
                    cashback={campaign.cashback}
                    currency={campaign.currency}
                    quota={campaign.quota}
                    taken={campaign.supporters.length}
                    theme='light'
                    disableTitle={true}
                    disableBrief={true}
                    disableAvailability={true}
                />:
                <BlackBoard 
                    className='black-board col' 
                    caption={campaign.item.name}
                    content={campaign.item.brief}
                    price={campaign.price}
                    discount={campaign.discount}
                    cashback={campaign.cashback}
                    currency={campaign.currency}
                    quota={campaign.quota}
                    taken={campaign.supporters.length}
                    theme='dark'
                    disableTitle={true}
                    disableBrief={true}
                    >
                    <div className='cta'>
                        <Link href={'/wizard?id=' + campaign._id}>
                            <Button className='button'>Get it now for {currencySymbol + actualPay} (w/ {currencySymbol + downPayment} down payment)</Button>
                        </Link>
                    </div>
                </BlackBoard>;
        }

        return <div className={[props.className?props.className:'', 'detail'].join(' ')}>
            <style jsx>
            {`
                .detail 
                {
                }

                .detail > .inner 
                {
                    
                }
                .detail > .inner > .col-container > .col > .brief 
                {
                    font: ${fonts.brief};
                    margin: ${margin};
                }

                .detail > .inner > .col-container > .col > .description > .inner 
                {
                    font: ${fonts.description};
                    margin: ${margin};
                }
                .detail > .inner > .col-container > .col > .description > .inner :global(img)
                {
                    width: 100%;
                }
                .detail > .inner > .col-container > .col > .cta
                {
                    margin: ${margin};
                }
                .detail > .inner > .col-container > :global(.col.black-board)
                {
                    display: none;
                }
                @media (min-width: ${breakPoints.stage + 1}px) 
                {
                    .detail > .inner > .col-container
                    {
                        display: flex;
                        flex-direction: row-reverse;
                    }
                    .detail > .inner > .col-container > :global(.col.black-board)
                    {
                        max-width: 50%;
                        display: block;
                        flex-grow: 1;
                        flex-shrink: 0;
                        margin-top: 30px;
                    }
                    .detail > .inner > .col-container > .col.article
                    {
                        flex-grow: 3;
                        flex-shrink: 1;
                    }
                    .detail > .inner > .col-container > .col > .cta,
                    .detail > .inner > .col-container > .col > :global(.black-board)
                    {
                        display: none;
                    }
                }
            `}
            </style>
            <div className='inner'>
                <div className='col-container'>
                    {renderBlackBoard()}
                    <div className='col article'>
                        <Heading2>{campaign.item.name}</Heading2>
                        <div className='brief'>{campaign.item.brief}</div>
                        {renderBlackBoard()}
                        <div className='description'>
                            <div className='inner'>
                                <Markdown markup={campaign.item.description} />
                            </div>
                        </div>
                        {
                            end < Date.now()?null:
                            <div className='cta'>
                                <Link href={'/wizard?id=' + campaign._id}>
                                    <Button className='button'>Get it now for {currencySymbol + actualPay} (w/ {currencySymbol + downPayment} down payment)</Button>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Detail;