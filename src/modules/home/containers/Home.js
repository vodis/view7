import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import LeftSidebars from '../../../components/Layout/LeftSidebars';
import Main from '../components/Main/Main';
import Tools from '../components/Tools/Tools';
import AddFolder from '../components/AddFolder/AddFolder';
import FolderList from '../components/FolderList/FolderList'

const Home = (props) => (
    <>
        <LeftSidebars>
            <AddFolder {...props} />
            <FolderList {...props} />
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