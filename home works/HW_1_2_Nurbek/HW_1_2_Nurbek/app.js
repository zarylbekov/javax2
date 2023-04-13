const Block = document.getElementById("small-block");
let distance = 0;


function moveBlock() {
  distance += 10;
  Block.style.left = distance + "px";
  if (distance < 850) {
    setTimeout(moveBlock, 100);
  }
}
moveBlock();