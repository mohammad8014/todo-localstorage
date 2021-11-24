let btn = document.getElementById("btn");
let input = document.getElementById("input");
let toodo = document.getElementById("toodo");


btn.addEventListener("click", addText);
// localStorage.clear("localText");
showText()
input.addEventListener('input',()=>{
    input.style.border='none'
    input.placeholder='Add new...'

})
input.addEventListener('keypress',(e)=>{
if(e.keyCode==13){
    addText()
}
})
function addText() {


    let addinpval = input.value;
    if(addinpval.trim()!=0){

        let texts = localStorage.getItem("localText");
        let textObj;
        if (texts == null) {
            textObj = [];
        } else {
            textObj = JSON.parse(texts)
        }
        textObj.unshift(addinpval);
        localStorage.setItem("localText", JSON.stringify(textObj));
        input.value = " ";
        // input.style.border='none'
    }else{
        input.style.border='1px solid red'
        input.placeholder='Please enter a text..'
    }


    showText()
}

function showText() {
    let texts = localStorage.getItem("localText");
    let textObj;
    if (texts == null) {
        textObj = [];
    } else {
        textObj = JSON.parse(texts)
    }

    let html = ``;

    textObj.forEach((item, index) => {


        input.value = "";



        html += ` 
        <li class="mb-1  pt-2 d-flex justify-content-between  ">
        <p>
        <input class="me-5 form-check-input shadow rounded" type="checkbox" class="mycheck" onclick='checked()' >
        <span>${item}</span>
        
        </p>
        <span>
        <img src="./icons8-pencil-64.png" style="margin-right: 20px; width: 20px; cursor: pointer;" alt="edit" onclick='edittask(${index})'>
        <img src="./icons8-trash-can.svg" style="margin-bottom: 4px; width: 20px; cursor: pointer;" alt="bin" onclick='deliteitem(${index})'>
        </span>
        </li>


        `


    })

    toodo.innerHTML = html;

}
function edittask(index){
    let saveindex=document.getElementById('saveindex')
    let btn=document.getElementById('btn')
    let savebtn=document.getElementById('savebtn')
    saveindex.value=index
    let texts = localStorage.getItem("localText");
    let textObj = JSON.parse(texts)
    input.value=textObj[index]
    btn.style.display="none"
    savebtn.style.display="block"
}


// 
let savebtn=document.getElementById('savebtn')
savebtn.addEventListener('click',function(){
    let btn=document.getElementById('btn')

    let texts = localStorage.getItem("localText")
    let textObj = JSON.parse(texts)
    let saveindex=document.getElementById('saveindex').value
    textObj[saveindex]=input.value
    
    localStorage.setItem("localText", JSON.stringify(textObj));
    btn.style.display="block"
    savebtn.style.display="none"
    input.value=''
    showText()


})



function deliteitem(index){
    if(confirm('Delit the list?')){
        let texts = localStorage.getItem("localText")
        let textObj = JSON.parse(texts)
        textObj.splice(index,1)
        localStorage.setItem("localText", JSON.stringify(textObj));
        
        showText()
    }


    
}



