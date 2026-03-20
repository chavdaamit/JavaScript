// Executes a function repeatedly after every specified time interval.
// The clearInterval() method is used to stop this repeated execution.

let all

const currentTime = ()=>{
    const time = new Date().toLocaleTimeString();

    console.log(time)
}

all = setInterval(currentTime,1000)


setTimeout(()=>{
    clearInterval(all)
    console.log("time is stop")
},15000)