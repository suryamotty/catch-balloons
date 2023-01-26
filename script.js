const screens =document.querySelectorAll('.screen');
// console.log(screens);
const choose_balloons_btns=document.querySelectorAll('.choose-balloon-btn');

const start_btn = document.getElementById('start-btn');

const game_container = document.getElementById('game-container');

const timeEl = document.getElementById('time');

const scoreEl = document.getElementById('score');

const message = document.getElementById('message');

let seconds=30;
let time=0;
let score=0;
let finalScore;
let ID;
let selected_balloon={}

start_btn.addEventListener('click',()=>screens[0].classList.add('up'));

choose_balloons_btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_balloon = {src,alt}
        screens[1].classList.add('up')
        setTimeout(createBalloon,1000)
        startGame()
    })
})

function startGame() {

    setInterval(decreaseTime,1000)
  
    
   
}
function decreaseTime(){
    if(seconds==-1){

        message.classList.add('visible')
        message.innerHTML="Game Over";
        createBalloon.remove();
     
        
       
      

}
else{
  
        timeEl.innerHTML=`Time:${seconds} seconds`
    seconds--
  

 }    
  
   
}


function createBalloon(){
    const balloon = document.createElement('div')
    balloon.classList.add('balloon')
    const { x, y}= getRandomLocation()
    balloon.style.top = `${y}px`
    balloon.style.left =`${x}px`
    balloon.innerHTML = `<img src="${selected_balloon.src}" alt="${selected_balloon.alt}" style="transform: rotate(${Math.random()*360}deg)"/>`
    balloon.addEventListener('click',catchBalloon)
    game_container.appendChild(balloon)
}
function  getRandomLocation(){
    const width = window.innerWidth
    const height= window.innerHeight
    const x = Math.random() * (width -200) + 100
    const y = Math.random() * (height -200) + 100
    return { x, y}
}
function catchBalloon(){
    increaseScore();
    this.classList.add('caught')
    setTimeout(()=>this.remove(),2000)
    addBalloon()
}
function addBalloon(){
    setTimeout(createBalloon,1000)
    setTimeout(createBalloon,1000)
}
function increaseScore(){
    score++;
    scoreEl.innerHTML=`Score:${score}`;
    if(seconds==0){
      
       
        finalScore=score;
        scoreEl.innerHTML=`Total Score:${finalScore}`;
        
        
       setTimeout(()=>document.location.reload(),4000)

        
        // document.location.reload()
    }

}
