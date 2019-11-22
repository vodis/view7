class matrix {
    constructor(props) {
        this.state = {
            trXInit: 459,
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
        };
        if (window.screen.width < 767) this.state.trXInit =  125;
    }

    valid(img) {
        return img.length && img.length === 2;
    }

    getTrackPosition(img) {
        return img[1] >= 0 && img[1] < 8 ? img[1] : 8;
    }

    getInitialTransitionX() {
        return this.state.trXInit;
    }
    
    getImagePosition =(img) => {
        const isValid = this.valid(img);
        
        if (isValid) {
            let { matrix } = this.state;
            let pos = this.getTrackPosition(img);

            let visibility = matrix[pos][1] ? "visible" : "hidden";
            let perspective = matrix[pos][6];
            let translateX = matrix[pos][2];
            let rotateY = matrix[pos][3];
            let scale = matrix[pos][4];
            let zIndex = matrix[pos][5];

            return {
                transform: `
                    perspective(${perspective}px)
                    translateX(${translateX}px) 
                    rotateY(${rotateY}deg) 
                    scale(${scale})
                    `,
                zIndex,
                visibility,
            };
        }
    }
}

export default matrix;