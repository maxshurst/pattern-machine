const number1box = document.getElementById('number1input');

const number2box = document.getElementById('number2input');
const box = document.getElementById('box');

const colorbox = document.getElementById('colorinput');
var boxes = 0;

function deleteClones(){
    const toDelete=document.getElementsByClassName('clone');
    console.log(toDelete);
    console.log(toDelete.length)
    for (let i=toDelete.length-1;i>=0;i--){
        toDelete[i].remove();
        console.log(toDelete[i])
    }
}

function submit(){
    deleteClones();
    boxes=0;
    const rows = number1box.value;
    const columns = number2box.value;
    const color = colorbox.value;

    const size = 500/Math.max(rows,columns)

    for (let i=0;i<rows; i++){
        for (let j=0;j<columns; j++){
            
            let cloned = document.createElement("div")
            cloned.style.left=(j*size+100).toString()+"px";
            cloned.style.top=(i*size+100).toString()+"px";
            cloned.classList.add('clone');
            cloned.style.width=size.toString()+"px";
            cloned.style.height=size.toString()+"px";
            cloned.addEventListener("click", changeColor);
            cloned.style.backgroundColor = color;
            cloned.id = `${i}&${j}`;
            document.body.appendChild(cloned); //add the cloned element to the page
        }
    }
    boxes=rows*columns;
    
}

function changeColor(event){
    event.target.style.backgroundColor=colorbox.value;
}