// Dark Mode
const toggle=document.getElementById("themeToggle");
if(toggle){
toggle.onclick=()=>{
document.body.classList.toggle("light");
};
}

// Countdown Timer
const timer=document.getElementById("timer");
if(timer){
let matchDate=new Date("April 10, 2026 19:30:00").getTime();
setInterval(()=>{
let now=new Date().getTime();
let gap=matchDate-now;

let d=Math.floor(gap/(1000*60*60*24));
let h=Math.floor((gap%(1000*60*60*24))/(1000*60*60));
let m=Math.floor((gap%(1000*60*60))/(1000*60));
let s=Math.floor((gap%(1000*60))/1000);

timer.innerHTML=`${d}d ${h}h ${m}m ${s}s`;
},1000);
}

// Poll
let votes=JSON.parse(localStorage.getItem("votes"))||{};
function vote(name){
votes[name]=(votes[name]||0)+1;
localStorage.setItem("votes",JSON.stringify(votes));
document.getElementById("pollResult").innerHTML=JSON.stringify(votes);
}

// Search Player
function searchPlayer(){
let input=document.getElementById("search").value.toLowerCase();
let cards=document.querySelectorAll(".card");
cards.forEach(card=>{
let name=card.innerText.toLowerCase();
card.style.display=name.includes(input)?"block":"none";
});
}