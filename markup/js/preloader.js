const text = "View 7";
const textField = document.getElementsByClassName('preloader__text')[0];

let i = 0;

this.setIDText = setInterval(scribbler.bind(this), 150);

function scribbler() {
    if (textField.innerHTML.length === text.length) { 
        stylerScaleY();
        return clearInterval(this.setIDText);
    }
    const arr = Array.from(text);
    textField.innerHTML += arr[i];
    ++i;
}

function stylerScaleY() {
    setTimeout(() => {
        let i = 0;

        this.setIDScaleY = setInterval(scaleY.bind(this), 10);
        
        function scaleY() {
            if (textField.style.marginTop === "-152px") {
                return clearInterval(this.setIDScaleY);
            } 
            textField.style.marginTop = `-${i}px`;
            textField.style.fontSize = `${2 + i*0.01}rem`;
            i += 2;
        }
    }, 2000);
}