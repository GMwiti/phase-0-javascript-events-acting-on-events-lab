// Your code here
const dodger = document.getElementById('dodger')

// let left = dodger.style.left
// left = parseInt(left)

// moveDodgerLeft()
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0){
        dodger.style.left = `${left - 1}px`
    }
}
document.addEventListener("keydown", (e)=>{
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});

function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
    if (right > 40 && right < 360){
        dodger.style.left = `${right + 1}px`
    }else{
        dodger,style.left = `${right - 1}px`
    }
};
document.addEventListener('keydown', (e)=>{
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
});