class Canvas {

    constructor(elem) {
        this.canvas = document.querySelector('#canvas');
        this.elem = elem;
    }

    createCanvas() {
        this.elem.addEventListener('change', () => {
            
            const context = this.canvas.getContext('2d');
            const file = this.elem.files[0];

            if (this.elem.id === 'firstInput') {

                const img1 = new Image();
                img1.file = file;
                
                const reader = new FileReader();
                reader.onload = ((aImg) => (e) => aImg.src = e.target.result)(img1);
                reader.readAsDataURL(file);

                img1.onload = function() {
                    const height = 300;
                    const width = (height * img1.width) / img1.height;
                    const x = 0;
                    const y = 0;
                    context.clearRect(x, y, 500, height);
                    context.drawImage(img1, x, y, width, height);
                }

            } else {
                
                const img2 = new Image();
                img2.file = file;
                
                const reader = new FileReader();
                reader.onload = ((aImg) => (e) => aImg.src = e.target.result)(img2);
                reader.readAsDataURL(file);

                img2.onload = function() {
                    const height = 300;
                    const width = (height * img2.width) / img2.height;
                    const x = 1000 - width;
                    const y = 0;
                    context.clearRect(500, y, 500, height);
                    context.drawImage(img2, x, y, width, height);
                }
            }
        });
    }
}

const canvas1 = new Canvas(document.querySelector('#firstInput'));
const canvas2 = new Canvas(document.querySelector('#secondInput'));
canvas1.createCanvas();
canvas2.createCanvas();

