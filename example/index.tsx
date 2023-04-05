import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {TestComponent} from '../.';

const App = () => {
    return (
        <div>
            <TestComponent/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
