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
                box-shadow: 0 2px 3px 0 rgba(0,0,0,0.3);

                cursor: pointer;
            }
            .card > a 
            {
                display: block;
                text-decoration: none;
            }
            .card > a > .image
            {
                background-color: #cfcfcf;
                background-size: cover;
                background-position: 50% 50%;
                padding-bottom: 80%;
                width: 100%;
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