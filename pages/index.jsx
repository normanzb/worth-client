import React from 'react';
import BasePage from './Base';
import Nav from '../components/Nav';
import Stage from '../components/Stage';

class Page extends BasePage {
    render() {
        return <div>
            <style jsx global>
            {`
                html,body {
                    margin: 0;
                    padding: 0;
                }
            `}
            </style>
            <Nav />
            <Stage />
        </div>;
    }
}

export default Page;