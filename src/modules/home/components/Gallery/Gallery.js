import React, { Component } from 'react';
import matrix from '../../../../helpers/matrix';
import { connect } from 'react-redux';
import { addSlideShowURL } from '../../actions/slideshow.actions';
import { setCurrentImageList } from '../../actions/folders.actions';

import GalleryPanel from '../GalleryPanel/GalleryPanel';
import GalleryNavigation from '../GalleryNavigation/GalleryNavigation';

import './Gallery.scss';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.matrix = new matrix();
        this.state = {
            trXInit: this.matrix.getInitialTransitionX(),
            gallery: [],
            currentFolder: "",
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.gallery !== nextState.gallery) {
            const mainImage = nextState.gallery.find(img => img[1] === 4);
            this.props.addSlideShowURL(mainImage);
            this.props.setCurrentImageList(nextState.gallery);
        }

        if (nextProps.currentFolder !== nextState.currentFolder) {
            this.setState({ gallery: [], trXInit: this.matrix.getInitialTransitionX() });
            this.getFoldersList(nextProps.currentFolder);
        }

        return true;
    }

    getFoldersList = (currentFolder) => {
        const { firebase, auth: { uid }} = this.props;
        const storage = firebase.storage();
        let i = 4;

        storage.ref().child(`/${uid}/${currentFolder}`).listAll()
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
            .catch((error) => console.log(error));

        this.setState({ currentFolder });
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
                <div className="main-info">
                    <div className="main-info__caption">Folder_Gallery</div>
                    <div className="main-info__text">
                        <p>Newer swiper for one-directional scrolling with item based navigation support.</p>
                    </div>
                </div>
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
                <GalleryNavigation />
                <GalleryPanel />
            </div>
        );
    }
}

export default connect(
    store => ({
        currentFolder: store.homeReducer.currentFolder
    }), 
    dispatch => ({
        addSlideShowURL: (url) => dispatch(addSlideShowURL(url)),
        setCurrentImageList: (arr) => dispatch(setCurrentImageList(arr)),
    }))(Gallery);