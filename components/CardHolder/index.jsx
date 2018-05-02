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
            @media (min-width: ${maxWidth * 2 + margin * 3 + 1}px) 
            {
                .card-holder
                {
                    justify-content: center;
                    align-items: flex-start;
                    flex-direction: row;
                    flex-wrap: wrap;
                }
                .card-holder > :global(.card)
                {
                    max-width: ${maxWidth}px;
                    min-width: ${maxWidth}px;
                    margin: ${margin*2}px ${margin}px;
                    border-radius: 10px;
                }
            }
        `}
        </style>
        {renderCards(filteredCampaigns)}
    </div>;
};

export default CardHolder;