import ProgressBar from '../ProgressBar';

class ProgressBarEmpty extends ProgressBar {
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

export default ProgressBarEmpty;