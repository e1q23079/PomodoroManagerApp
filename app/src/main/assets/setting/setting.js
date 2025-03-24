const testAudio = new Audio('../SoundEffects/tap.mp3');

const volumeTest = () => {
    if(getVolume()!=null){
        testAudio.volume = getVolume();
    }
    testAudio.play();
};

const about = () => {
    window.location.href = '../about/about.html';
};

const getWorkTime = () => {
    return localStorage.getItem("toDoTime");
};

const getBreakTime = () => {
    return localStorage.getItem("breakTime");
};

const getCounter = () => {
    return localStorage.getItem("counter");
};

const getVolume = () => {
    return localStorage.getItem("volume");
};

const openTimer = () => {

    localStorage.setItem("toDoTime",document.getElementById("workTime").value);
    localStorage.setItem("breakTime",document.getElementById("breakTime").value);
    localStorage.setItem("counter",document.getElementById("count").value);
    localStorage.setItem("volume",document.getElementById("volume").value/10);
    
    window.location.href = '../index.html';
};

const setVolume = () => {
    localStorage.setItem("volume",document.getElementById("volume").value/10);
    testAudio.volume = document.getElementById("volume").value/10;
};

const pomodoroReset = () => {
    /*
    var ans = window.confirm('It will be pomodoro reset, is this OK?');
    if(ans){

    }
    */
    localStorage.setItem("counter",0);
    localStorage.setItem("nowTime",3/60);
    localStorage.setItem("status",false);
    window.location.href = '../index.html';
};


const settingInp = () => {
    document.getElementById("workTime").value = getWorkTime();
    document.getElementById("breakTime").value = getBreakTime();
    document.getElementById("count").value = getCounter();
    document.getElementById("volume").value = getVolume()*10;
};

settingInp();