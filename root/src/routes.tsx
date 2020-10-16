import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Root from './routes/Root';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Root} />
            </Switch>
        </BrowserRouter>
        
    )
}