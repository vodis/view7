import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import { getFolderName } from '../../actions/folders.actions';

import './FolderList.scss';

class FolderList extends Component {
    constructor(props) {
        super(props);
        this.folderListRef = React.createRef();
        this.state = { 
            gallery: {}, 
            folderList: null, 
            currentImageList: [],
            active: false,
            editNow: false, 
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.gallery && this.compare(Object.keys(nextProps.gallery), Object.keys(nextState.gallery))) {
            const { gallery } = nextProps;
            const folderList = Object.entries(gallery);
            this.setState({ gallery, folderList });
        }
        
        if (nextProps.currentImageList.length !== this.state.currentImageList.length) {
            this.setState({ currentImageList: nextProps.currentImageList })
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
        this.setState({ editNow: id })
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

    setFolderName = (id) => {
        this.props.getFolderName(id);
        this.setState({ currentImageList: [] });
    }

    uploadImage = (currentFolder, file) => {
        const { firebase,  auth: { uid } } = this.props;
        const storage = firebase.storage();

        let imageFile = file.target.files;
        let imageReader = new FileReader();
        imageReader.readAsDataURL(imageFile[0]);

        imageReader.onload = (action) => {
            const base64URL = action.target.result;
            
            fetch(base64URL)
                .then(res => res.blob())
                .then(blog => {
                    storage.ref().child(`/${uid}/${currentFolder}/${imageFile[0].name}`).put(blog)
                        .then((snapshot) => console.log("Uploaded a blob or file", snapshot));
                })
        }

    }

    render() {
        const { folderList, editNow } = this.state;

        return (
            <nav className="nav">
                <ul className="folder-list" ref={this.folderListRef}>
                    {folderList && folderList.map((folder, index) => (
                        <Fragment key={folder[0]}>
                            <li
                                onMouseOver={this.toggleClassByRef.bind(this, folder[0], 'edit')} 
                                onMouseLeave={this.toggleClassByRef.bind(this, folder[0], 'delete')}
                                className='folder-list__item'
                                id={folder[0]}
                            >
                                {editNow !== folder[0] && 
                                    <span 
                                        className="folder-list__name"
                                        onClick={this.setFolderName.bind(this, folder[0])}
                                    >{folder[1].folderName}</span>}
                                {editNow === folder[0] &&
                                    <input 
                                        value={folder[1].folderName} 
                                        id={index} 
                                        onChange={this.handleChangeName.bind(this, folder[0])} 
                                        onBlur={() => this.setState({editNow: ''})}    
                                    />
                                }
                                <label 
                                    htmlFor={index}
                                    onClick={this.edit.bind(this, folder[0])} 
                                    className="icon icon-edit"
                                ></label>
                                <button onClick={this.deleteFolder.bind(this, folder[0])} className="icon icon-delete"></button>
                            </li>
                            <li key={"sub_" + folder[0]}>
                                <ul className="images-list">
                                    {this.props.currentFolder === folder[0] && this.state.currentImageList.map((image, i) => {
                                        let name = image[0].split('%2F')[2].split('?')[0];
                                        return (
                                            <Fragment key={i}>
                                                <li>{name}</li>
                                            </Fragment>
                                        )
                                    })}
                                </ul>
                            </li>
                            <label className="btn__add-image">
                                Add Image
                                <input style={{ display: "none" }} type="file" onChange={this.uploadImage.bind(this, folder[0])}/>
                            </label>
                        </Fragment>
                    ))}
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = ({ firestore: { data }, homeReducer}) => {
    return {
        gallery: data && data.folder,
        currentImageList: homeReducer.currentImageList,
        currentFolder: homeReducer.currentFolder,
}};

const mapDispatchToProps = (dispatch) => ({
    getFolderName: (name) => dispatch(getFolderName(name)),
});
 
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
    connect(mapStateToProps, mapDispatchToProps)
)(FolderList);