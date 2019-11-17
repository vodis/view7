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
        return nextKeys.every((key, index) => key !== prevKeys[index]) || nextKeys.length !== prevKeys.length;
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

    render() {
        const { folderList } = this.state;
        return (
            <nav className="nav">
                <ul className="folder-list" ref={this.folderListRef}>
                    {folderList && folderList.map((folder) => (
                        <li
                            onMouseOver={this.toggleClassByRef.bind(this, folder[0], 'edit')} 
                            onMouseLeave={this.toggleClassByRef.bind(this, folder[0], 'delete')}
                            className='folder-list__item'
                            key={folder[0]}
                            id={folder[0]}
                        >
                            <span>
                                {folder[1].folderName}
                            </span>
                            <button className="icon icon-edit"></button>
                            <button className="icon icon-delete"></button>
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