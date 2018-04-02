import React, { PureComponent } from 'react';

function renderStarting(state, props) {
    if (props.starting) {
        return null;
    }

    return <div className='starting'>
        <style jsx>
        {`
            .starting
            {
                border: none;
                height: 6px;
                width: 4px;
                background-image: url('./static/bar-end-${state.name}-right.png');
                transform: scale(-1,-1);
            }
        `}
        </style>
    </div>;
}

function renderEnding(state, props) {
    if (props.ending) {
        return null;
    }

    return <div className='ending'>
        <style jsx>
        {`
            .ending
            {
                border: none;
                height: 6px;
                width: 4px;
                background-image: url('./static/bar-end-${state.name}-right.png')
            }
        `}
        </style>
    </div>;
}

class ProgressBar extends PureComponent {
    constructor(...args) {
        super(...args);
        this.state = {
            name: 'empty',
            borderStyle: 'dashed',
            borderColor: '#FFF',
            backgroundColor: 'transparent'
        };
    }
    render() {
        var props = this.props;
        var state = this.state;
        var centerDivStyle = {};

        if (!props.starting) {
            centerDivStyle.borderLeft = 'none';
        }

        if (!props.ending) {
            centerDivStyle.borderRight = 'none';
        }

        return (
            <div 
                className={(props.className?props.className + ' ':'') + 'progress-bar'}
                style={{width: props.width}}>
                <style jsx>
                {`
                    .progress-bar 
                    {
                        display: flex;
                    }
                    .starting 
                    {

                    }
                    .center 
                    {
                        border: 1px ${state.borderStyle} ${state.borderColor};
                        background-color: ${state.backgroundColor};
                        height: 4px;
                        flex-grow: 1;
                    }
                `}
                </style>
                {renderStarting(state, props)}
                <div className='center' style={centerDivStyle}></div>
                {renderEnding(state, props)}
            </div>
        );
    }
}

export default ProgressBar;