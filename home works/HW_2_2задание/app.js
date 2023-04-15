const block = document.getElementById("small-block");
let distance = 0;

function moveBox() {
  distance += 10;
  block.style.left = distance + "px";
  if (distance < 850) { 
    setTimeout(moveBox, 100);
  }else{
    distance=distance-850; 
    setTimeout(moveBox, 100);
  }
}
moveBox();