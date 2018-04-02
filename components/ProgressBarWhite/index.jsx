import ProgressBar from '../ProgressBar';

class ProgressBarEmpty extends ProgressBar {
    constructor(...args) {
        super(...args);
        this.state = {
            name: 'white',
            borderStyle: 'solid',
            borderColor: '#FFF',
            backgroundColor: '#FFF'
        };
    }
}

export default ProgressBarEmpty;