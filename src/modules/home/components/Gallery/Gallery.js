import React, { Component } from 'react';
// import matrix from '../../../../helpers/matrix';

import './Gallery.scss';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.getImagesUrl = this.getImagesUrl.bind(this);
        this.state = {
            gallery: [],
            // matrix [index, position, translateX, rotateY, scale, z-index]
            matrix: [
                [1, -4, -240, -20, 0.80, 1],
                [2, -3, 60, 20, 0.85, 2],
                [3, -2, 50, 30, 0.90, 3],
                [4, -1, 30, 40, 0.95, 4],
                [5, 0, 0, 0, 1, 5], // First
                [6, 1, -30, -20, 0.95, 4], // Second
                [7, 2, -50, -15, 0.90, 3], // Third
                [8, 3, -60, -20, 0.85, 2], // Fifth
                [9, 4, -240, -20, 0.80, 1], // Sixth
            ],
        }
    }

    componentDidMount() {
        this.getImagesUrl();
    }

    getImagesUrl = () => {
        const { firebase, auth: { uid }} = this.props;
        const storage = firebase.storage();
        let i = 3;
        
        storage.ref().child(`/${uid}/Miscellanea`).listAll()
            .then((res) => {
                res.items.forEach((itemRef) => {
                    itemRef.getDownloadURL().then((url) => {
                        this.setState(() => {
                            let { gallery } = this.state;
                            gallery.push([url, i]);
                            i++;
                            return {
                                gallery
                            }
                        })
                    })
                });
            })
            .catch((error) => {
                console.log(error)
            });
    }

    dragCapture = (e) => {
        const { currentPositionX, matrix } = this.state;

        if (e.screenX) {
            let newPosX;
            if (currentPositionX > e.screenX) newPosX = (currentPositionX - e.screenX) * -1;
            if (currentPositionX < e.screenX) newPosX = (e.screenX - currentPositionX);
                
            const re = /translateX\+|-(\d{1,4})/g;
            const shift = e.currentTarget.style.transform.match(re) ? -1 : 0;
            
            const trX = newPosX + shift;
            matrix[4][2] = trX;

            this.setState(() => (
                matrix
            ));
        }
    };

    render() {
        const { gallery, matrix } = this.state;

        return (
            <div className="gallery">
                <h2>Navigation for one-directional scrolling by images</h2>
                <div className="gallery__cards">
                    <div className="gallery__cards-track">
                        {gallery.map((img, i) => {
                            let posX = img[1] < 5 ? img[1] : 8;
                            return (
                                <div className="gallery__card" key={i} id={i} onDragCapture={this.dragCapture} onMouseDown={(posX) => this.setState({ currentPositionX: posX.screenX })}
                                    style={{
                                        transform: `translateX(${matrix[posX][2]}px) rotateY(${matrix[posX][3]}deg) scale(${matrix[posX][4]})`,
                                        zIndex: matrix[posX][5]
                                    }}
                                >
                                    <img className="gallery__card-img" src={img} alt={i} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Gallery;