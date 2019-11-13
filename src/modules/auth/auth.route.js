import React, { Suspense } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import {loadable} from '../../services/loadable';
import Spinner from '../../components/Spinner/Spinner';

const AuthRouter = (props) => {
    let history = useHistory();

    const Component = (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route path="/login" name="auth" exact component={loadable.auth} />
            </Switch>
        </Suspense>
    );
    
    return props.auth.uid === undefined && history.location.pathname !== "/login"
        ?   <Redirect to="/login" />
        :   Component
}

export default AuthRouter;