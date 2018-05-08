import React, { PureComponent } from 'react';
import breakPoints from '../../util/breakPoints';

function renderCandidates() {

}

class Slide extends PureComponent {
    render() {
        var props = this.props;
        var images = props.images;
        return <div className={[props.className?props.className:'', 'slide'].join(' ')}>
            <style jsx>
            {`
                .slide 
                {
                    display: flex;
                    height: 90vw;
                    max-height: 70vh;
                    background: #EFEFEF;
                }

                .slide > .inner
                {
                    display: flex;
                    flex-grow: 1;
                }

                .slide > .inner > .spotlight
                {
                    flex-grow: 1;
                    background-size: cover;
                    background-position: 50% 50%;
                }
            `}
            </style>
            <div className='inner'>
                <div className='spotlight' style={{backgroundImage: `url(${images[0].url})`}}>

                </div>
                {renderCandidates(images)}
            </div>
        </div>;
    }
}

export default Slide;