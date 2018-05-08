import React, { PureComponent } from 'react';
import breakPoints from '../../util/breakPoints';

class Stage extends PureComponent {
    render() {
        var props = this.props;
        return <div 
            className={(props.className?props.className:'') + ' container'}>
            <style jsx>
            {`
                .container 
                {
                    display: flex;
                    position: relative;
                    height: 100px;

                    transition: height .6s ease-in-out;
                }

                @media (max-width: ${breakPoints.stage}px) 
                {
                    .container 
                    {
                        display: none;
                    }
                }

                :global(html.scroll-top--off-top) .container 
                {
                    height: 70px;
                }
            `}
            </style>
        </div>;
    }
}

export default Stage;