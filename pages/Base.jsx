import { Component } from 'react';

class Base extends Component {
    componentDidMount() {
        if (!document.documentElement.classList.contains('wf-active')) {
            import('webfontloader').then(WebFont =>
            WebFont.load({
                google: ['Roboto']
            }));
        }
    }
}

export default Base;