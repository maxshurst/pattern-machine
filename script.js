const number1box = document.getElementById('number1input');

const number2box = document.getElementById('number2input');
const box = document.getElementById('box');

const colorbox = document.getElementById('colorinput');
var boxes = []


function addClone(){
    
    const color = colorbox.value;
    const rows = number1box.value;
    const columns = number2box.value;

    box.style.backgroundColor = color;
    
    for (let i=0;i<rows; i++){
        for (let j=0;j<columns; j++){
            
            //const cloned= document.createElement("box");
            const cloned = document.getElementById('box').cloneNode(false); //clone the element
            cloned.style.left=(j*120+100).toString()+"px";
            cloned.style.top=(i*120+100).toString()+"px";
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
