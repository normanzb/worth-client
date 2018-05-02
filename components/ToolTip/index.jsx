import React, { PureComponent } from 'react';

class ToolTip extends PureComponent {
    constructor(...args) {
        super(...args);
        this.state = {
            name: 'empty',
            borderStyle: 'dashed',
            borderColor: '#FFF',
            backgroundColor: 'transparent',
            color: '#FFF'
        };
    }
    render() {
        var props = this.props;
        var state = this.state;

        return (
            <div 
                className={(props.className?props.className + ' ':'') + 'tool-tip'}
                >
                <style jsx>
                {`
                    .tool-tip
                    {
                        display: flex;

                        position: relative;
                    }
                    .label, .tip 
                    {
                        border: 1px ${state.borderStyle} ${state.borderColor};
                        background-color: ${state.backgroundColor};
                    }
                    .label
                    {
                        position: relative;

                        z-index: 1;

                        font: normal normal 400 12px/1 Tahoma;
                        color: ${state.color};
                        text-shadow: 1px 1px 0 rgba(0,0,0,.25);
                    }
                    .inner 
                    {
                        margin: 12px 14px;
                    }
                    .tip 
                    {
                        width: 8px;
                        height: 8px;

                        border: 1px ${state.borderStyle} ${state.borderColor};
                        background-color: ${state.backgroundColor};
                        border-bottom: none;
                        border-right: none;

                        position: absolute;
                        bottom: calc(100% - 5px);
                        left: calc(50% - 5px);
                        z-index: 0;

                        transform: rotate(45deg);
                    }
                    .tip-opening 
                    {
                        height: 1px;
                        width: 12px;

                        border: none;
                        background-color: ${state.backgroundColor};

                        position: absolute;
                        top: 0;
                        left: calc(50% - 6px);
                        z-index: 2;
                    }
                `}
                </style>
                <div className='label'>
                    <div className='inner'>
                        {props.text}
                    </div>
                </div>
                <div className='tip'></div>
                <div className='tip-opening'></div>
            </div>
        );
    }
}

export default ToolTip;