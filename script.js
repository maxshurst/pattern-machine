const number1box = document.getElementById('number1input');

const number2box = document.getElementById('number2input');
const box = document.getElementById('box');

const colorbox = document.getElementById('colorinput');
var boxes = 0;


function submit(){
    
    const toDelete=document.getElementsByClassName('clone');
    for (i=0;i<toDelete.length;i++){
        toDelete[i].remove();
    }
    console.log(toDelete);
    console.log(toDelete.length);

    boxes=0;
    const color = colorbox.value;
    const rows = number1box.value;
    const columns = number2box.value;

    box.style.backgroundColor = color;
    
    for (let i=0;i<rows; i++){
        for (let j=0;j<columns; j++){
            
            const cloned = document.createElement("div")
            cloned.style.left=(j*120+100).toString()+"px";
            cloned.style.top=(i*120+100).toString()+"px";
            cloned.classList.add('clone');
            cloned.style.backgroundColor = color;
            cloned.id = `${i}&${j}`;
            document.body.appendChild(cloned); //add the cloned element to the page
        }
    }
    boxes=rows*columns;
    
}
