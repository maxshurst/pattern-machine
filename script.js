const number1box = document.getElementById('number1input');

const number2box = document.getElementById('number2input');

const colorbox = document.getElementById('colorinput');


function addClone(){

    var cloned = document.getElementById('box').cloneNode(true); //clone the element
    document.body.appendChild(cloned); //add the cloned element to the page
    
}

function submit(){

const color = colorbox.value;
const rows = number1box.value;
const columns = number2box.value;




}
