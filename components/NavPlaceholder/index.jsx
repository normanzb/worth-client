import React, { PureComponent } from 'react';
import breakPoints from '../../util/breakPoints';

class Stage extends PureComponent {
    render() {
        var props = this.props;
        return <div 
            className={(props.className?props.className:'') + ' stage-placeholder'}>
            <style jsx>
            {`
                .stage-placeholder 
                {
                    display: flex;
                    position: relative;
                    height: 100px;
                }

                @media (max-width: ${breakPoints.stage}px) 
                {
                    .stage-placeholder 
                    {
                        display: none;
                    }
                }
            `}
            </style>
        </div>;
    }
}

export default Stage;