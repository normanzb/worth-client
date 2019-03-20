import React from 'react';
import Card from '../Card';

function renderCards(campaigns) {
    return campaigns.map(function(item, index){
        return <Card className='card' key={item._id} campaign={item} />;
    });
}

var CardHolder = (props) => {
    var campaigns = props.campaigns;
    var featuring = props.featuring;
    var filteredCampaigns = campaigns.filter(function(campaign){
        if (featuring && campaign._id === featuring.campaign._id) {
            return false;
        }
        else {
            return campaign;
        }
    });

    var maxWidth = 500;
    var margin = 15;
    var breakPoint = maxWidth * 2 + margin * 3;

    return <div className={['card-holder',(props.className?props.className:'')].join(' ')}>
        <style jsx>
        {`
            .card-holder
            {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .card-holder > :global(.card)
            {
                margin: 0;
                flex-grow: 0;
                flex-shrink: 1;
                flex-basis: 100%;
            }
            @media (min-width: ${breakPoint + 1}px) 
            {
                .card-holder
                {
                    justify-content: center;
                    align-items: stretch;
                    flex-direction: row;
                    flex-wrap: wrap;
                    padding: 40px 0;
                }
                .card-holder > :global(.card)
                {
                    max-width: ${maxWidth}px;
                    min-width: ${maxWidth}px;
                    margin: ${margin * 2}px ${margin}px;
                }
            }
            @media (max-width: ${breakPoint}px) 
            {
                .card-holder > :global(.card)
                {
                    margin: ${margin}px 0;
                }
                .card-holder > :global(.card):first-child ,
                .card-holder > :global(.card):last-child 
                {
                    margin: 0;
                }
            }
        `}
        </style>
        {renderCards(filteredCampaigns)}
    </div>;
};

export default CardHolder;