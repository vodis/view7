import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import LeftSidebars from '../../../components/Layout/LeftSidebars';
import Main from '../components/Main/Main';
import Tools from '../components/Tools/Tools';
import Folder from '../components/Folder/Folder';

const Home = (props) => (
    <>
        <LeftSidebars>
            <Folder {...props} />
        </LeftSidebars>
        <Main {...props} />
        <Tools {...props} />
    </>
);

export default compose(
    firestoreConnect(() => ['gallery']),
    connect(({firestore, firebase: { auth }}, props ) => {
        return {
            gallery: firestore.ordered.gallery,
            props,
            auth
        }
    })
)(Home);