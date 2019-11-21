import React, { Component } from 'react';
// import matrix from '../../../../helpers/matrix';

import './Gallery.scss';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.getImagesUrl = this.getImagesUrl.bind(this);
        this.state = {
            trXInit: 459,
            gallery: [],
            matrix: [
                // [index, visible, translateX, rotateY, scale, z-index, perspective],
                [1, 0, 240, 5, 0.7, 1, 1000],
                [2, 1, 60, 10, 0.85, 2, 1000],
                [3, 1, 50, 15, 0.90, 3, 1000],
                [4, 1, 30, 30, 0.95, 4, 1000],
                [5, 1, 0, 0, 1, 5, 1000], 
                [6, 1, -30, -30, 0.95, 4, 1000],
                [7, 1, -50, -15, 0.90, 3, 1000],
                [8, 1, -60, -10, 0.85, 2, 1000],
                [9, 0, -240, -5, 0.7, 1, 1000],
            ],
        }
    }

    componentDidMount() {
        this.getImagesUrl();
    }

    getImagesUrl = () => {
        const { firebase, auth: { uid }} = this.props;
        const storage = firebase.storage();
        let i = 4;
        
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
        const { currentPositionX, gallery, trXInit } = this.state;

        if (e.screenX) {
            if (currentPositionX - e.screenX > 10) {
                const trX = trXInit - 175;
                gallery.forEach(el => {
                    return el[1] -= 1;
                });

                return this.setState((callback) => {
                    return {
                        ...callback,
                        gallery,
                        trXInit: trX,
                    }
                });
            }

            if (currentPositionX - e.screenX < 0) {
                const trX = trXInit + 175;
                gallery.forEach(el => {
                    return el[1] += 1;
                });

                return this.setState((callback) => {
                    return {
                        ...callback,
                        gallery,
                        trXInit: trX,
                    }
                });
            }
        }
    };

    render() {
        const { gallery, matrix, trXInit } = this.state;
        const getTrackPosId = (img) => img >= 0 && img < 8 ? img : 8;

        return (
            <div className="gallery">
                <h2>Navigation for one-directional scrolling by images</h2>
                <div className="gallery__cards">
                    <div className="gallery__cards-track" style={{transform: `translateX(${trXInit}px)`}}>
                        {gallery.length > 0 && gallery.map((img, i) => {
                            let trackId = getTrackPosId(img[1]);
                            let view = matrix[trackId][1] ? "visible" : "hidden";
                            return (
                                <div className={"gallery__card"} key={i} posx={trackId} onDragEndCapture={this.dragCapture} onMouseDown={(trackId) => this.setState({ currentPositionX: trackId.screenX })}
                                    style={{
                                        transform: `
                                            perspective(${matrix[trackId][6]}px)
                                            translateX(${matrix[trackId][2]}px) 
                                            rotateY(${matrix[trackId][3]}deg) 
                                            scale(${matrix[trackId][4]})
                                            `,
                                        zIndex: matrix[trackId][5],
                                        visibility: view,
                                    }}
                                >
                                    <img className="gallery__card-img" src={img[0]} alt={i} />
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