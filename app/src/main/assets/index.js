let fullscreen = false;

const tapAudio = new Audio('./SoundEffects/tap.mp3');
const workAudio = new Audio('./SoundEffects/work.mp3');
const breakAUdio = new Audio('./SoundEffects/break.mp3');

let startFlag = false;

let status = false;

let countTime = 3/60;

let toDoTime = 25;
let breakTime = 5;

let counter = 0;

const getVolume = () => {
  return localStorage.getItem("volume");
};

const fullSc = () => {
  if(fullscreen){
    document.documentElement.requestFullscreen();
  } 
}


const pauseStart = () => {
  fullSc();
  tapAudio.play();
  if(startFlag){
    startFlag = false;
  }else{
    startFlag = true;
  }
};

const toDoStart = () => {
  workAudio.play();
  status = true;
  countTime = toDoTime;
};

const breakStart = () => {
  breakAUdio.play();
  counter++;
  status = false;
  countTime = breakTime;
};


const openSetting = () => {
  setLocalStrage(countTime,toDoTime,breakTime,status,counter);
  window.location.href = 'setting/setting.html';
};


const getLocalStrage = () => {
  countTime = localStorage.getItem("nowTime");
  toDoTime = localStorage.getItem("toDoTime");
  breakTime = localStorage.getItem("breakTime");
  counter = localStorage.getItem("counter");
  localStorage.getItem("status") === "true" ? status = true : status = false; 
  if(countTime>=1){
    localStorage.getItem("status") === "true" ? countTime = toDoTime : countTime = breakTime; 
  }
};

const setLocalStrage = (nowTime,toDoTime,breakTime,status,counter) => {
  localStorage.setItem("nowTime",nowTime);
  localStorage.setItem("toDoTime",toDoTime);
  localStorage.setItem("breakTime",breakTime);
  localStorage.setItem("status",status);
  localStorage.setItem("counter",counter);
};


if(getVolume()!=null){
  tapAudio.volume = getVolume();
  workAudio.volume = getVolume();
  breakAUdio.volume = getVolume();
}else{
  localStorage.setItem("volume",1);
}



const setCss = (time,pomodoro) => {
    let manager = 100 - (time/(pomodoro*60))*100;
    document.getElementById('circle').style.backgroundImage = `radial-gradient(#fff 0% 32%, transparent 32%),conic-gradient(${status?'rgb(0, 157, 255)':'rgb(50, 192, 202)'} ${manager}%,#e4e4e4 ${manager}% 100%)`;
};

const setStatus = () => {
    document.getElementById('status').innerText = !startFlag ? "PAUSE":`${status ? "WORK TIME":"BREAK TIME"}`;
}

const setPomodoro = () => {
    document.getElementById('pomodoro').innerText = `${counter} Pomodoro`;
}