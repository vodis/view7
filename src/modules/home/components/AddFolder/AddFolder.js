import React from 'react';

import './AddFolder.scss';

class Folder extends React.Component {
    state= {
        folderName: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { folderName } = this.state;
        const { auth: { uid } } = this.props;
        this.props.firestore.collection('gallery').doc(uid).collection('userCollection').add({
            folderName,
            imagesFolder: [],
            createdAt: new Date(),
        })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });

        this.setState({ folderName: '' });
    }

    render() {
        const { folderName } = this.state;
        return (
            <form className="folder-form" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={(e) => this.setState({ folderName: e.target.value})} value={folderName} placeholder="Create New Folder" />
                <button></button>
            </form>
        );
    }
}

export default Folder;