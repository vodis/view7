import React from 'react';

class Folder extends React.Component {
    state= {
        folderName: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.firestore.collection('todos').add({
            todo: 'Do something good'
        }).then((data) => {
            console.log(data);
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