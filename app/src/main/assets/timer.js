let time = 0;

localStorage.getItem("counter") == null ? setLocalStrage(countTime, toDoTime, breakTime, status, counter) : getLocalStrage();

setCss(time, countTime);
setStatus();
setPomodoro();


const id = setInterval(() => {
    if (startFlag) {
        if (time < countTime * 60) {
            time++;
        } else {
            status ? breakStart() : toDoStart();
            time = 0;
        }
    }
    setCss(time,countTime);
    setStatus();
    setPomodoro();
},1000);

const reset = () => {
    /*
    if(countTime>=1){
      var ans = window.confirm('It will be reset, is this OK?');
      if(!ans){
        return;
      }
    }
    */
    countTime = 3/60;
    status = false;
    time = 0;
    startFlag = true;
    tapAudio.play();
    fullSc();
  };