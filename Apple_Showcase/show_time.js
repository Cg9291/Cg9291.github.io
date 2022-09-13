let time=()=>{
  document.getElementById("time").innerHTML=new Date().toLocaleTimeString();
  setInterval(time, 1000);
}
time();




/*let clock=()=>{
const today=new Date();

let hours=today.getHours();
let minutes=today.getMinutes();
let seconds=today.getSeconds();

minutes = checkTime(minutes);
seconds = checkTime(seconds);
hours = checkTime(hours);

document.getElementById("date").innerHTML=`${hours}:${minutes}:${seconds}`;
setInterval(clock, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
console.log(clock());*/