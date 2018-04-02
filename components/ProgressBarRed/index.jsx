import ProgressBar from '../ProgressBar';

class ProgressBarEmpty extends ProgressBar {
    constructor(...args) {
        super(...args);
        this.state = {
            name: 'red',
            borderStyle: 'solid',
            borderColor: '#c42727',
            backgroundColor: '#c42727'
        };
    }
}

export default ProgressBarEmpty;