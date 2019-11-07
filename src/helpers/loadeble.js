import React from 'react';
import Loadable from 'react-loadable';
import LoadingView from '../components/LoadingView/LoadingView';

const lazy = loader => Loadable({
    loader,
    loading: () => <LoadingView />,
});

export const loadable = {
    Home: lazy(() => import('../routes/home/Home')),
};