
score = 0;
cross = true;
gameov = new Audio('gameover.mp3');
gameb = new Audio('sound.mp3');
setTimeout(()=>{
    gameb.play();
},1000)


document.onkeydown = function(e) {
    console.log("key code is:", e.keyCode);
    if(e.keyCode==38){
        dino = document.querySelector(".dino");
        dino.classList.add('animation');
        setTimeout(()=>{
            dino.classList.remove('animation')
        },700)

    }
    if(e.keyCode==39){
        dino = document.querySelector(".dino");
       dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinox+122+"px";
    }
    if(e.keyCode==37){
        dino = document.querySelector(".dino");
       dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinox-122+"px";
    }
    
    
}

setInterval(()=>{
    dino =document.querySelector('.dino');
    gameOver = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox =  parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
     offsetx = Math.abs(dx-ox);
     offsety = Math.abs(dy-oy);

     if(offsetx<93 && offsety<52){
        gameOver.innerHTML= "Game Over - Reload to Play Again";
        obstacle.classList.remove ('obstacleani');
        gameov.play();
        setTimeout(()=>{
            gameov.pause();
            gameb.pause();
        },1000)
     }
    else if(offsetx<144 && cross){
        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(()=>{
         cross = true;
        },1000);

        setTimeout(()=>{
            aniDur =parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));

            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';

        },500)
     }

},10)

function updatescore(score){
    scoreCont.innerHTML = "Your Score : " + score;
}