import React from 'react';

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
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={(e) => this.setState({ folderName: e.target.value})} />
                    <button>+</button>
                </form>
            </div>
        );
    }
}

export default Folder;