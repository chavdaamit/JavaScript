
//setInterval() runs a function repeatedly at a fixed time interval.
//It returns an intervalID, which can be used with clearInterval() to stop it.


function currentTime(){
    let time = new Date().toLocaleTimeString();
    console.log("currentTime is :",time)
}

 let all = setInterval(currentTime,1000)

// setInterval(()=>{
//     console.log("hello")
// },6000)

setTimeout(() => {
    clearInterval(all);
    console.log("timer is stop")
}, 10000);