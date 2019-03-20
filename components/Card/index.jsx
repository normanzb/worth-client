import React from 'react';
import BlackBoard from '../BlackBoard';
import Link from 'next/link';

var Card = (props) => {
    var campaign = props.campaign;
    var url;
    if (campaign.item.images[0].url) {
        url = campaign.item.images[0].url;
    }
    else {
        url = 'upload/' + campaign.item.images[0].filename;
    }
    return <div className={['card',(props.className?props.className:'')].join(' ')}>
        <style jsx>
        {`
            .card 
            {
                display: flex;
                flex-direction: column;
                position: relative;
                overflow: hidden;

                cursor: pointer;
            }
            .card > a 
            {
                display: flex;
                flex-grow: 1;
                flex-shrink: 0;
                flex-direction: column;
                text-decoration: none;
            }
            .card > a > .image
            {
                background-color: #cfcfcf;
                background-size: cover;
                background-position: 50% 50%;
                padding-bottom: 40%;
                width: 100%;
            }

            .card > a > :global(.black-board)
            {
                flex-grow: 1;
            }
        `}
        </style>
        <Link href={'/detail?id=' + campaign._id}>
            <a>
                <div className='image' style={{backgroundImage: `url(${url})`}}></div>
                <BlackBoard 
                    className='black-board' 
                    caption={campaign.item.name}
                    content={campaign.item.brief}
                    price={campaign.price}
                    discount={campaign.discount}
                    cashback={campaign.cashback}
                    currency={campaign.currency}
                    quota={campaign.quota}
                    taken={campaign.supporters.length}
                    theme='light'
                    />
            </a>
        </Link>
    </div>;
};

export default Card;