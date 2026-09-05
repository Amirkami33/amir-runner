const player = document.getElementById("player");

document.addEventListener("keydown", jump);

document.addEventListener("touchstart", jump);

function jump(){

if(player.classList.contains("jump"))
return;

player.classList.add("jump");

setTimeout(() => {
player.classList.remove("jump");
},700);

}
