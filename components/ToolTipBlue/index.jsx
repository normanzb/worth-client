import ToolTip from '../ToolTip';

class ToolTipEmpty extends ToolTip {
    constructor(...args) {
        super(...args);
        this.state = {
            name: 'blue',
            borderStyle: 'solid',
            borderColor: '#016DAB',
            backgroundColor: '#016DAB'
        };
    }
}

export default ToolTipEmpty;