import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
// import classnames from 'classnames';

import './FolderList.scss';

class FolderList extends Component {
    constructor(props) {
        super(props);
        this.folderListRef = React.createRef();
        this.state = { gallery: {}, folderList: null, active: false };
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
        return nextKeys.length !== prevKeys.length || nextKeys.every((key, index) => key !== prevKeys[index]);
    }

    toggleClassByRef = (folderId, action) => {
        const { children } = this.folderListRef.current;
        const folderList = Object.values(children);

        if (action === 'edit') {
            folderList.findIndex((folder) => {
                if (folder.id === folderId) {
                    const [ ...rest ] = folder.classList;
                    const classExist = rest.some((className) => className === 'active');
                    return classExist ? null: folder.className += ' active';
                }
                return null;
            });
        }

        if (action === 'delete') {
            folderList.findIndex((folder) => {
                if (folder.id === folderId) {
                    const re = /.active/g;
                    const classList = folder.className;
                    folder.className = classList.replace(re, '');
                }
                return null;
            });
        }
        
        return null;
    }

    deleteFolder = (id) => {
        const { firestore, auth: { uid } } = this.props;
        firestore.collection('gallery').doc(uid).collection('userCollection').doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }

    edit = (id) => {
        console.log(id);
    }

    handleChangeName = (id, e) => {
        const { firestore, auth: { uid } } = this.props;
        firestore.collection('gallery').doc(uid).collection('userCollection').doc(id).set({
            folderName: e.target.value
        }).then(function() {
            console.log("Document successfully written!");
        }).catch(function(error) {
            console.error("Error writing document: ", error);
        });

        // Update state before firestore will have updated
        const { folderList } = this.state;
        const index = folderList.findIndex((folder) => folder[0] === id);
        const updatedFolderList = folderList[index][1].folderName = e.target.value;

        this.setState({ folderList, updatedFolderList })
    }

    render() {
        const { folderList } = this.state;
        return (
            <nav className="nav">
                <ul className="folder-list" ref={this.folderListRef}>
                    {folderList && folderList.map((folder, index) => (
                        <li
                            onMouseOver={this.toggleClassByRef.bind(this, folder[0], 'edit')} 
                            onMouseLeave={this.toggleClassByRef.bind(this, folder[0], 'delete')}
                            className='folder-list__item'
                            key={folder[0]}
                            id={folder[0]}
                        >
                            <input value={folder[1].folderName} id={index} onChange={this.handleChangeName.bind(this, folder[0])} />
                            <label htmlFor={index} onClick={this.edit.bind(this, folder[0])} className="icon icon-edit"></label>
                            <button onClick={this.deleteFolder.bind(this, folder[0])} className="icon icon-delete"></button>
                        </li>
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