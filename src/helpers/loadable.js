import { lazy } from 'react';

export const loadable = {
    home: lazy(() => import('../modules/home/containers/Home')),
    auth: lazy(() => {
        return Promise.all([
            import('../modules/auth/containers/Auth'),
            new Promise(delay => setTimeout(delay, 3000))
        ]).then(([ex]) => ex)
    })
}