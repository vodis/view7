import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class FolderList extends Component {
    constructor(props) {
        super(props);
        this.state = { gallery: {}, folderList: null }
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        if (nextProps.gallery && this.compare(Object.keys(nextProps.gallery), Object.keys(nextState.gallery))) {
            const { gallery } = nextProps;
            const folderList = Object.entries(gallery);
            this.setState({ gallery, folderList });
        }
        return true;
    }

    compare(nextKeys, prevKeys) {
        return nextKeys.every((key, index) => key !== prevKeys[index]) || nextKeys.length !== prevKeys.length;
    }

    render() {
        const { folderList } = this.state;
        return (
            <nav className="nav">
                <ul className="nav__categories">
                    {folderList && folderList.map((folder) => (
                        <li key={folder[0]}>{folder[1].folderName}</li>
                    ))}
                </ul>
            </nav>
        );
    }
}
 
export default compose(
    firestoreConnect((props) => {
        return [
            {
                collection: 'gallery',
                doc: props.auth.uid,
                subcollections: [
                    { 
                        collection: 'userCollection'
                    }
                ],
                storeAs: 'folder'
            }
        ]
    }),
    connect(({ firestore: { data }}) => {
        return {
            gallery: data && data.folder
        }
    })
)(FolderList);