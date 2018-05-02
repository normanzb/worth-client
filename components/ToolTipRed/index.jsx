import ToolTip from '../ToolTip';

class ToolTipEmpty extends ToolTip {
    constructor(...args) {
        super(...args);
        this.state = {
            name: 'red',
            color: '#FFF',
            borderStyle: 'solid',
            borderColor: '#c42727',
            backgroundColor: '#c42727'
        };
    }
}

export default ToolTipEmpty;