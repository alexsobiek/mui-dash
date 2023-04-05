import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {TestComponent} from '../src';

describe('it', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TestComponent/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
