import React, { Component } from 'react';
import matrix from '../../../../helpers/matrix';

import './Gallery.scss';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.matrix = new matrix();
        this.state = {
            trXInit: this.matrix.getInitialTransitionX(),
            gallery: [],
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
        const { gallery, trXInit } = this.state;

        return (
            <div className="gallery">
                <h2>Navigation for one-directional scrolling by images</h2>
                <div className="gallery__cards">
                    <div className="gallery__cards-track" style={{transform: `translateX(${trXInit}px)`}}>
                        {gallery.length > 0 && gallery.map((img, i) => {
                            return (
                                <div key={i}
                                    className={"gallery__card"}  
                                    posx={this.matrix.getTrackPosition(img)} 
                                    onDragEndCapture={this.dragCapture} 
                                    onMouseDown={(pos) => this.setState({ currentPositionX: pos.screenX })}
                                    style={this.matrix.getImagePosition(img)}
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