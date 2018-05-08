import React, { PureComponent } from 'react';
import Link from 'next/link';
import BlackBoard from '../BlackBoard';
import breakPoints from '../../util/breakPoints';

class Stage extends PureComponent {
    render() {
        var props = this.props;
        var url;
        var campaign;

        try{
            campaign = props.featuring.campaign;
            if (props.featuring.campaign.item.images[0].url) {
                url = props.featuring.campaign.item.images[0].url;
            }
            else {
                url = 'upload/' + props.featuring.campaign.item.images[0].filename;
            }
        }
        catch(ex) {}
        return <div 
            className={(props.className?props.className:'') + ' stage'}>
            <style jsx>
                {`
                    .stage 
                    {
                        display: flex;
                        justify-content: flex-end;
                        position: relative;                
                    }
                    .stage > a 
                    {
                        display: block;
                        text-decoration: none;
                        width: 100%;
                        height: 80vh;
                        max-height: 90vh;
                    }
                    .stage > a > .background 
                    {
                        background-color: #cfcfcf;
                        background-size: cover;
                        background-position: 50% 50%;
                        height: 100%;
                        width: 100%;
                    }
                    .stage > a > :global(.black-board) 
                    {
                        position: absolute;
                        bottom: 5%;
                        right: 3%;
                        max-width: 40%;
                    }
                    @media (max-width: ${breakPoints.stage}px) 
                    {
                        .stage 
                        {
                            justify-content: center;
                            flex-direction: column;
                        }
                        .stage > a
                        {
                            height: auto;
                            max-height: none;
                        }
                        .stage > a > .background 
                        {
                            min-height: 300px;
                            height: 40vh;
                        }
                        .stage > a > :global(.black-board) 
                        {
                            position: relative;
                            max-width: none;
                            width: 100%;
                            top: 0;
                            left: 0;
                            bottom: 0;
                            right: 0;
                        }
                    }
                `}
            </style>
            <Link href={'/detail?id=' + campaign._id}>
                <a>
                    <div className='background' style={{backgroundImage: `url(${url})`}}></div>
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
                        />
                </a>
            </Link>
        </div>;
    }
}

export default Stage;