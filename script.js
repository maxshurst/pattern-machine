const number1box = document.getElementById('number1input');

const number2box = document.getElementById('number2input');
const box = document.getElementById('box');

const colorbox = document.getElementById('colorinput');
var boxes = []


function addClone(){

    const color = colorbox.value;
    const rows = number1box.value;
    const columns = number2box.value;
    for (let i=0;i<rows; i++){
        for (let i=0;i<rows; i++){
            var cloned = document.getElementById('box').cloneNode(true); //clone the element
            cloned.style.left=i*150;
            cloned.style.right=i*150;
            document.body.appendChild(cloned); //add the cloned element to the page
        }
    }
    
}

function submit(){

    const color = colorbox.value;
    const rows = number1box.value;
    const columns = number2box.value;

    box.style.backgroundColor = color; // WORK ON THIS







}
