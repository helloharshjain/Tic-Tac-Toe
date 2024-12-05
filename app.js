let boxes=document.querySelectorAll(".boxes");
let btn=document.querySelector(".btn");
 let newbtn=document.querySelector("#newbtn");
 let msgcontainer=document.querySelector(".msgcontainer");
 let msg=document.querySelector("#msg");

let turnO=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
     turnO=true;
     enableboxes();
     msgcontainer.classList.add("hide");

    
}

boxes.forEach((boxes)=>{
    boxes.addEventListener("click",()=>{

if(turnO){
    boxes.innerText="O"
    turnO=false;
    
}else{
    boxes.innerText="X"
    turnO=true;
}
boxes.disabled=true;
checkwinner();
});

});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
for(let box of boxes){
    box.disabled=false;
    box.innerText="";
}
};
const showWinner=(winner)=>{
    msg.innerText=`congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

 const checkwinner=()=>{
    for( let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!=""&& pos2val!=""&& pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winner",pos1val);
                 showWinner( pos1val);
            }
        }
    }

};
newbtn.addEventListener("click",resetgame);
btn.addEventListener("click",resetgame);
