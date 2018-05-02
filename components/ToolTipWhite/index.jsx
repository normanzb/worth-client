import ToolTip from '../ToolTip';

class ToolTipEmpty extends ToolTip {
    constructor(...args) {
        super(...args);
        this.state = {
            name: 'white',
            borderStyle: 'solid',
            borderColor: '#FFF',
            backgroundColor: '#FFF',
            color: '#000'
        };
    }
}

export default ToolTipEmpty;