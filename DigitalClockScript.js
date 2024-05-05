const setTime=()=>{
    const time=new Date().toLocaleTimeString().split(/[ :]/);
    document.getElementById("hour").innerText=time[0];
    document.getElementById("min").innerText=time[1];
    document.getElementById("sec").innerText=time[2];
    document.getElementById("bfOrAf").innerText=time[3];
}

setTime()

setInterval(setTime,1000)