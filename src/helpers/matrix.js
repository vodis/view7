class matrix {
    constructor(gallery) {
        this.galleryList = gallery;
        this.galleryListWithPosition = [];
        this.state = {
            matrix: [
                // matrix [index, position, translateX, rotateY, scale, z-index]
                [1, -4, -240, -20, 0.80, 1],          // Before Sixth
                [2, -3, 60, 20, 0.85, 2],             // Before Fifth
                [3, -2, 50, 30, 0.90, 3],             // Before Third
                [4, -1, 30, 40, 0.95, 4],             // Before Second
                [5, 0, 0, 0, 1, 5],                   // First 
                [6, 1, -30, -20, 0.95, 4],            // After Second
                [7, 2, -50, -15, 0.90, 3],            // After Third
                [8, 3, -60, -20, 0.85, 2],            // After Fifth
                [9, 4, -240, -20, 0.80, 1],           // After Sixth
            ],
        }
    }

    setPosition() {
        console.log(this.galleryList[0])
    }

    getPosition() {

    }
}

export default matrix;